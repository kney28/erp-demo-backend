import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { CreateHeadquartersDto } from './dto/create-headquarters.dto'; 
import { UpdateHeadquartersDto } from './dto/update-headquarters.dto'; 
import { Headquarters } from './entities/headquarters.entity'; 

@Injectable() 
export class HeadquarterssService { 
	constructor( 
		@InjectRepository(Headquarters) 
		private headquarterssRepository: Repository<Headquarters>, 
	) {} 

	async create(createHeadquartersDto: CreateHeadquartersDto): Promise<Headquarters> { 
		const headquarters: Headquarters = 
			this.headquarterssRepository.create(createHeadquartersDto); 
		return await this.headquarterssRepository.save(headquarters); 
	} 

	findAll(): Promise<Headquarters[]> { 
		return this.headquarterssRepository.find(); 
	} 

	findOne(id: string): Promise<Headquarters> { 
		return this.headquarterssRepository.findOneBy({ id }); 
	} 

	async update( 
		id: string, 
		updateHeadquartersDto: UpdateHeadquartersDto, 
	): Promise<Headquarters> { 
		const headquarters: Headquarters = await this.headquarterssRepository.findOneBy({ 
			id, 
		}); 
		const editedHeadquarters: Headquarters = Object.assign( 
			headquarters, 
			updateHeadquartersDto, 
		); 
		return await this.headquarterssRepository.save(editedHeadquarters); 
	} 

	async remove(id: string): Promise<Headquarters> { 
		const headquarters: Headquarters = await this.headquarterssRepository.findOneBy({ 
			id, 
		}); 
		return await this.headquarterssRepository.softRemove(headquarters); 
	} 
}