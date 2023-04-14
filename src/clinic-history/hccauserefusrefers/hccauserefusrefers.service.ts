import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { CreateHccauserefusreferDto } from './dto/create-hccauserefusrefer.dto'; 
import { UpdateHccauserefusreferDto } from './dto/update-hccauserefusrefer.dto'; 
import { Hccauserefusrefer } from './entities/hccauserefusrefer.entity'; 

@Injectable() 
export class HccauserefusrefersService { 
	constructor( 
		@InjectRepository(Hccauserefusrefer) 
		private hccauserefusrefersRepository: Repository<Hccauserefusrefer>, 
	) {} 

	async create(createHccauserefusreferDto: CreateHccauserefusreferDto): Promise<Hccauserefusrefer> { 
		const hccauserefusrefer: Hccauserefusrefer = 
			this.hccauserefusrefersRepository.create(createHccauserefusreferDto); 
		return await this.hccauserefusrefersRepository.save(hccauserefusrefer); 
	} 

	findAll(): Promise<Hccauserefusrefer[]> { 
		return this.hccauserefusrefersRepository.find(); 
	} 

	findOne(id: string): Promise<Hccauserefusrefer> { 
		return this.hccauserefusrefersRepository.findOneBy({ id }); 
	} 

	async update( 
		id: string, 
		updateHccauserefusreferDto: UpdateHccauserefusreferDto, 
	): Promise<Hccauserefusrefer> { 
		const hccauserefusrefer: Hccauserefusrefer = await this.hccauserefusrefersRepository.findOneBy({ 
			id, 
		}); 
		const editedHccauserefusrefer: Hccauserefusrefer = Object.assign( 
			hccauserefusrefer, 
			updateHccauserefusreferDto, 
		); 
		return await this.hccauserefusrefersRepository.save(editedHccauserefusrefer); 
	} 

	async remove(id: string): Promise<Hccauserefusrefer> { 
		const hccauserefusrefer: Hccauserefusrefer = await this.hccauserefusrefersRepository.findOneBy({ 
			id, 
		}); 
		return await this.hccauserefusrefersRepository.softRemove(hccauserefusrefer); 
	} 
}