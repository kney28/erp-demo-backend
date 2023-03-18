import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { CreateTsboxesDto } from './dto/create-tsboxes.dto'; 
import { UpdateTsboxesDto } from './dto/update-tsboxes.dto'; 
import { Tsboxes } from './entities/tsboxes.entity'; 

@Injectable() 
export class TsboxessService { 
	constructor( 
		@InjectRepository(Tsboxes) 
		private tsboxessRepository: Repository<Tsboxes>, 
	) {} 

	async create(createTsboxesDto: CreateTsboxesDto): Promise<Tsboxes> { 
		const tsboxes: Tsboxes = 
			this.tsboxessRepository.create(createTsboxesDto); 
		return await this.tsboxessRepository.save(tsboxes); 
	} 

	findAll(): Promise<Tsboxes[]> { 
		return this.tsboxessRepository.find(); 
	} 

	findOne(id: string): Promise<Tsboxes> { 
		return this.tsboxessRepository.findOneBy({ id }); 
	} 

	async update( 
		id: string, 
		updateTsboxesDto: UpdateTsboxesDto, 
	): Promise<Tsboxes> { 
		const tsboxes: Tsboxes = await this.tsboxessRepository.findOneBy({ 
			id, 
		}); 
		const editedTsboxes: Tsboxes = Object.assign( 
			tsboxes, 
			updateTsboxesDto, 
		); 
		return await this.tsboxessRepository.save(editedTsboxes); 
	} 

	async remove(id: string): Promise<Tsboxes> { 
		const tsboxes: Tsboxes = await this.tsboxessRepository.findOneBy({ 
			id, 
		}); 
		return await this.tsboxessRepository.softRemove(tsboxes); 
	} 
}