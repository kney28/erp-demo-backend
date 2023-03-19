import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { CreateTsdisconDto } from './dto/create-tsdiscon.dto'; 
import { UpdateTsdisconDto } from './dto/update-tsdiscon.dto'; 
import { Tsdiscon } from './entities/tsdiscon.entity'; 

@Injectable() 
export class TsdisconsService { 
	constructor( 
		@InjectRepository(Tsdiscon) 
		private tsdisconsRepository: Repository<Tsdiscon>, 
	) {} 

	async create(createTsdisconDto: CreateTsdisconDto): Promise<Tsdiscon> { 
		const tsdiscon: Tsdiscon = 
			this.tsdisconsRepository.create(createTsdisconDto); 
		return await this.tsdisconsRepository.save(tsdiscon); 
	} 

	findAll(): Promise<Tsdiscon[]> { 
		return this.tsdisconsRepository.find(); 
	} 

	findOne(id: string): Promise<Tsdiscon> { 
		return this.tsdisconsRepository.findOneBy({ id }); 
	} 

	async update( 
		id: string, 
		updateTsdisconDto: UpdateTsdisconDto, 
	): Promise<Tsdiscon> { 
		const tsdiscon: Tsdiscon = await this.tsdisconsRepository.findOneBy({ 
			id, 
		}); 
		const editedTsdiscon: Tsdiscon = Object.assign( 
			tsdiscon, 
			updateTsdisconDto, 
		); 
		return await this.tsdisconsRepository.save(editedTsdiscon); 
	} 

	async remove(id: string): Promise<Tsdiscon> { 
		const tsdiscon: Tsdiscon = await this.tsdisconsRepository.findOneBy({ 
			id, 
		}); 
		return await this.tsdisconsRepository.softRemove(tsdiscon); 
	} 
}