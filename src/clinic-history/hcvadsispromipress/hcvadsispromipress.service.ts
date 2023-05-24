import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { CreateHcvadsispromipresDto } from './dto/create-hcvadsispromipres.dto'; 
import { UpdateHcvadsispromipresDto } from './dto/update-hcvadsispromipres.dto'; 
import { Hcvadsispromipres } from './entities/hcvadsispromipres.entity'; 

@Injectable() 
export class HcvadsispromipressService { 
	constructor( 
		@InjectRepository(Hcvadsispromipres) 
		private hcvadsispromipressRepository: Repository<Hcvadsispromipres>, 
	) {} 

	async create(createHcvadsispromipresDto: CreateHcvadsispromipresDto): Promise<Hcvadsispromipres> { 
		const hcvadsispromipres: Hcvadsispromipres = 
			this.hcvadsispromipressRepository.create(createHcvadsispromipresDto); 
		return await this.hcvadsispromipressRepository.save(hcvadsispromipres); 
	} 

	findAll(): Promise<Hcvadsispromipres[]> { 
		return this.hcvadsispromipressRepository.find(); 
	} 

	findOne(id: string): Promise<Hcvadsispromipres> { 
		return this.hcvadsispromipressRepository.findOneBy({ id }); 
	} 

	async update( 
		id: string, 
		updateHcvadsispromipresDto: UpdateHcvadsispromipresDto, 
	): Promise<Hcvadsispromipres> { 
		const hcvadsispromipres: Hcvadsispromipres = await this.hcvadsispromipressRepository.findOneBy({ 
			id, 
		}); 
		const editedHcvadsispromipres: Hcvadsispromipres = Object.assign( 
			hcvadsispromipres, 
			updateHcvadsispromipresDto, 
		); 
		return await this.hcvadsispromipressRepository.save(editedHcvadsispromipres); 
	} 

	async remove(id: string): Promise<Hcvadsispromipres> { 
		const hcvadsispromipres: Hcvadsispromipres = await this.hcvadsispromipressRepository.findOneBy({ 
			id, 
		}); 
		return await this.hcvadsispromipressRepository.softRemove(hcvadsispromipres); 
	} 
}