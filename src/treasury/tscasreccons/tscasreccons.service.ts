import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { CreateTscasrecconDto } from './dto/create-tscasreccon.dto'; 
import { UpdateTscasrecconDto } from './dto/update-tscasreccon.dto'; 
import { Tscasreccon } from './entities/tscasreccon.entity'; 

@Injectable() 
export class TscasrecconsService { 
	constructor( 
		@InjectRepository(Tscasreccon) 
		private tscasrecconsRepository: Repository<Tscasreccon>, 
	) {} 

	async create(createTscasrecconDto: CreateTscasrecconDto): Promise<Tscasreccon> { 
		const tscasreccon: Tscasreccon = 
			this.tscasrecconsRepository.create(createTscasrecconDto); 
		return await this.tscasrecconsRepository.save(tscasreccon); 
	} 

	findAll(): Promise<Tscasreccon[]> { 
		return this.tscasrecconsRepository.find(); 
	} 

	findOne(id: string): Promise<Tscasreccon> { 
		return this.tscasrecconsRepository.findOneBy({ id }); 
	} 

	async update( 
		id: string, 
		updateTscasrecconDto: UpdateTscasrecconDto, 
	): Promise<Tscasreccon> { 
		const tscasreccon: Tscasreccon = await this.tscasrecconsRepository.findOneBy({ 
			id, 
		}); 
		const editedTscasreccon: Tscasreccon = Object.assign( 
			tscasreccon, 
			updateTscasrecconDto, 
		); 
		return await this.tscasrecconsRepository.save(editedTscasreccon); 
	} 

	async remove(id: string): Promise<Tscasreccon> { 
		const tscasreccon: Tscasreccon = await this.tscasrecconsRepository.findOneBy({ 
			id, 
		}); 
		return await this.tscasrecconsRepository.softRemove(tscasreccon); 
	} 
}