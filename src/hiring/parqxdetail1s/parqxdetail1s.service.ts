import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Equal, Repository } from 'typeorm'; 
import { CreateParqxdetail1Dto } from './dto/create-parqxdetail1.dto'; 
import { UpdateParqxdetail1Dto } from './dto/update-parqxdetail1.dto'; 
import { Parqxdetail1 } from './entities/parqxdetail1.entity'; 

@Injectable() 
export class Parqxdetail1sService { 
	constructor( 
		@InjectRepository(Parqxdetail1) 
		private parqxdetail1sRepository: Repository<Parqxdetail1>, 
	) {} 

	async create(createParqxdetail1Dto: CreateParqxdetail1Dto): Promise<Parqxdetail1> { 
		const parqxdetail1: Parqxdetail1 = 
			this.parqxdetail1sRepository.create(createParqxdetail1Dto); 
		return await this.parqxdetail1sRepository.save(parqxdetail1); 
	} 

	findAll(): Promise<Parqxdetail1[]> { 
		return this.parqxdetail1sRepository.find(); 
	} 

	findOne(id: string): Promise<Parqxdetail1> { 
		return this.parqxdetail1sRepository.findOneBy({ id }); 
	} 

	findAllByHead(id: number): Promise<Parqxdetail1[]> { 
		return this.parqxdetail1sRepository.findBy({
			parameterizationqx: Equal(id)
		});
	}

	async update( 
		id: string, 
		updateParqxdetail1Dto: UpdateParqxdetail1Dto, 
	): Promise<Parqxdetail1> { 
		const parqxdetail1: Parqxdetail1 = await this.parqxdetail1sRepository.findOneBy({ 
			id, 
		}); 
		const editedParqxdetail1: Parqxdetail1 = Object.assign( 
			parqxdetail1, 
			updateParqxdetail1Dto, 
		); 
		return await this.parqxdetail1sRepository.save(editedParqxdetail1); 
	} 

	async remove(id: string): Promise<Parqxdetail1> { 
		const parqxdetail1: Parqxdetail1 = await this.parqxdetail1sRepository.findOneBy({ 
			id, 
		}); 
		return await this.parqxdetail1sRepository.softRemove(parqxdetail1); 
	} 
}