import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { CreateInvcumDto } from './dto/create-invcum.dto'; 
import { UpdateInvcumDto } from './dto/update-invcum.dto'; 
import { Invcum } from './entities/invcum.entity'; 

@Injectable() 
export class InvcumsService { 
	constructor( 
		@InjectRepository(Invcum) 
		private invcumsRepository: Repository<Invcum>, 
	) {} 

	async create(createInvcumDto: CreateInvcumDto): Promise<Invcum> { 
		const invcum: Invcum = 
			this.invcumsRepository.create(createInvcumDto); 
		return await this.invcumsRepository.save(invcum); 
	} 

	findAll(): Promise<Invcum[]> { 
		return this.invcumsRepository.find(); 
	} 

	findOne(id: string): Promise<Invcum> { 
		return this.invcumsRepository.findOneBy({ id }); 
	} 

	async update( 
		id: string, 
		updateInvcumDto: UpdateInvcumDto, 
	): Promise<Invcum> { 
		const invcum: Invcum = await this.invcumsRepository.findOneBy({ 
			id, 
		}); 
		const editedInvcum: Invcum = Object.assign( 
			invcum, 
			updateInvcumDto, 
		); 
		return await this.invcumsRepository.save(editedInvcum); 
	} 

	async remove(id: string): Promise<Invcum> { 
		const invcum: Invcum = await this.invcumsRepository.findOneBy({ 
			id, 
		}); 
		return await this.invcumsRepository.softRemove(invcum); 
	} 
}