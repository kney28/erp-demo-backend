import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { CreateHccauseremisreferDto } from './dto/create-hccauseremisrefer.dto'; 
import { UpdateHccauseremisreferDto } from './dto/update-hccauseremisrefer.dto'; 
import { Hccauseremisrefer } from './entities/hccauseremisrefer.entity'; 

@Injectable() 
export class HccauseremisrefersService { 
	constructor( 
		@InjectRepository(Hccauseremisrefer) 
		private hccauseremisrefersRepository: Repository<Hccauseremisrefer>, 
	) {} 

	async create(createHccauseremisreferDto: CreateHccauseremisreferDto): Promise<Hccauseremisrefer> { 
		const hccauseremisrefer: Hccauseremisrefer = 
			this.hccauseremisrefersRepository.create(createHccauseremisreferDto); 
		return await this.hccauseremisrefersRepository.save(hccauseremisrefer); 
	} 

	findAll(): Promise<Hccauseremisrefer[]> { 
		return this.hccauseremisrefersRepository.find(); 
	} 

	findOne(id: string): Promise<Hccauseremisrefer> { 
		return this.hccauseremisrefersRepository.findOneBy({ id }); 
	} 

	async update( 
		id: string, 
		updateHccauseremisreferDto: UpdateHccauseremisreferDto, 
	): Promise<Hccauseremisrefer> { 
		const hccauseremisrefer: Hccauseremisrefer = await this.hccauseremisrefersRepository.findOneBy({ 
			id, 
		}); 
		const editedHccauseremisrefer: Hccauseremisrefer = Object.assign( 
			hccauseremisrefer, 
			updateHccauseremisreferDto, 
		); 
		return await this.hccauseremisrefersRepository.save(editedHccauseremisrefer); 
	} 

	async remove(id: string): Promise<Hccauseremisrefer> { 
		const hccauseremisrefer: Hccauseremisrefer = await this.hccauseremisrefersRepository.findOneBy({ 
			id, 
		}); 
		return await this.hccauseremisrefersRepository.softRemove(hccauseremisrefer); 
	} 
}