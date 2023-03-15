import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { CreateTsnotconDto } from './dto/create-tsnotcon.dto'; 
import { UpdateTsnotconDto } from './dto/update-tsnotcon.dto'; 
import { Tsnotcon } from './entities/tsnotcon.entity'; 

@Injectable() 
export class TsnotconsService { 
	constructor( 
		@InjectRepository(Tsnotcon) 
		private tsnotconsRepository: Repository<Tsnotcon>, 
	) {} 

	async create(createTsnotconDto: CreateTsnotconDto): Promise<Tsnotcon> { 
		const tsnotcon: Tsnotcon = 
			this.tsnotconsRepository.create(createTsnotconDto); 
		return await this.tsnotconsRepository.save(tsnotcon); 
	} 

	findAll(): Promise<Tsnotcon[]> { 
		return this.tsnotconsRepository.find(); 
	} 

	findOne(id: string): Promise<Tsnotcon> { 
		return this.tsnotconsRepository.findOneBy({ id }); 
	} 

	async update( 
		id: string, 
		updateTsnotconDto: UpdateTsnotconDto, 
	): Promise<Tsnotcon> { 
		const tsnotcon: Tsnotcon = await this.tsnotconsRepository.findOneBy({ 
			id, 
		}); 
		const editedTsnotcon: Tsnotcon = Object.assign( 
			tsnotcon, 
			updateTsnotconDto, 
		); 
		return await this.tsnotconsRepository.save(editedTsnotcon); 
	} 

	async remove(id: string): Promise<Tsnotcon> { 
		const tsnotcon: Tsnotcon = await this.tsnotconsRepository.findOneBy({ 
			id, 
		}); 
		return await this.tsnotconsRepository.softRemove(tsnotcon); 
	} 
}