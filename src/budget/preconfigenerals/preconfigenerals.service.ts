import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { CreatePreconfigeneralDto } from './dto/create-preconfigeneral.dto'; 
import { UpdatePreconfigeneralDto } from './dto/update-preconfigeneral.dto'; 
import { Preconfigeneral } from './entities/preconfigeneral.entity'; 

@Injectable() 
export class PreconfigeneralsService { 
	constructor( 
		@InjectRepository(Preconfigeneral) 
		private preconfigeneralsRepository: Repository<Preconfigeneral>, 
	) {} 

	async create(createPreconfigeneralDto: CreatePreconfigeneralDto): Promise<Preconfigeneral> { 
		const preconfigeneral: Preconfigeneral = 
			this.preconfigeneralsRepository.create(createPreconfigeneralDto); 
		return await this.preconfigeneralsRepository.save(preconfigeneral); 
	} 

	findAll(): Promise<Preconfigeneral[]> { 
		return this.preconfigeneralsRepository.find(); 
	} 

	findOne(id: string): Promise<Preconfigeneral> { 
		return this.preconfigeneralsRepository.findOneBy({ id }); 
	} 

	async update( 
		id: string, 
		updatePreconfigeneralDto: UpdatePreconfigeneralDto, 
	): Promise<Preconfigeneral> { 
		const preconfigeneral: Preconfigeneral = await this.preconfigeneralsRepository.findOneBy({ 
			id, 
		}); 
		const editedPreconfigeneral: Preconfigeneral = Object.assign( 
			preconfigeneral, 
			updatePreconfigeneralDto, 
		); 
		return await this.preconfigeneralsRepository.save(editedPreconfigeneral); 
	} 

	async remove(id: string): Promise<Preconfigeneral> { 
		const preconfigeneral: Preconfigeneral = await this.preconfigeneralsRepository.findOneBy({ 
			id, 
		}); 
		return await this.preconfigeneralsRepository.softRemove(preconfigeneral); 
	} 
}