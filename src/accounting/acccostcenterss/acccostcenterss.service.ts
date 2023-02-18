import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { CreateAcccostcentersDto } from './dto/create-acccostcenters.dto'; 
import { UpdateAcccostcentersDto } from './dto/update-acccostcenters.dto'; 
import { Acccostcenters } from './entities/acccostcenters.entity'; 

@Injectable() 
export class AcccostcenterssService { 
	constructor( 
		@InjectRepository(Acccostcenters) 
		private acccostcenterssRepository: Repository<Acccostcenters>, 
	) {} 

	async create(createAcccostcentersDto: CreateAcccostcentersDto): Promise<Acccostcenters> { 
		const acccostcenters: Acccostcenters = 
			this.acccostcenterssRepository.create(createAcccostcentersDto); 
		return await this.acccostcenterssRepository.save(acccostcenters); 
	} 

	findAll(): Promise<Acccostcenters[]> { 
		return this.acccostcenterssRepository.find(); 
	} 

	findOne(id: string): Promise<Acccostcenters> { 
		return this.acccostcenterssRepository.findOneBy({ id }); 
	} 

	async update( 
		id: string, 
		updateAcccostcentersDto: UpdateAcccostcentersDto, 
	): Promise<Acccostcenters> { 
		const acccostcenters: Acccostcenters = await this.acccostcenterssRepository.findOneBy({ 
			id, 
		}); 
		const editedAcccostcenters: Acccostcenters = Object.assign( 
			acccostcenters, 
			updateAcccostcentersDto, 
		); 
		return await this.acccostcenterssRepository.save(editedAcccostcenters); 
	} 

	async remove(id: string): Promise<Acccostcenters> { 
		const acccostcenters: Acccostcenters = await this.acccostcenterssRepository.findOneBy({ 
			id, 
		}); 
		return await this.acccostcenterssRepository.softRemove(acccostcenters); 
	} 
}