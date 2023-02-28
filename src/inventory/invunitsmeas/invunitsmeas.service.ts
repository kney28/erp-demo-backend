import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { CreateInvunitsmeaDto } from './dto/create-invunitsmea.dto'; 
import { UpdateInvunitsmeaDto } from './dto/update-invunitsmea.dto'; 
import { Invunitsmea } from './entities/invunitsmea.entity'; 

@Injectable() 
export class InvunitsmeasService { 
	constructor( 
		@InjectRepository(Invunitsmea) 
		private invunitsmeasRepository: Repository<Invunitsmea>, 
	) {} 

	async create(createInvunitsmeaDto: CreateInvunitsmeaDto): Promise<Invunitsmea> { 
		const invunitsmea: Invunitsmea = 
			this.invunitsmeasRepository.create(createInvunitsmeaDto); 
		return await this.invunitsmeasRepository.save(invunitsmea); 
	} 

	findAll(): Promise<Invunitsmea[]> { 
		return this.invunitsmeasRepository.find(); 
	} 

	findOne(id: string): Promise<Invunitsmea> { 
		return this.invunitsmeasRepository.findOneBy({ id }); 
	} 

	async update( 
		id: string, 
		updateInvunitsmeaDto: UpdateInvunitsmeaDto, 
	): Promise<Invunitsmea> { 
		const invunitsmea: Invunitsmea = await this.invunitsmeasRepository.findOneBy({ 
			id, 
		}); 
		const editedInvunitsmea: Invunitsmea = Object.assign( 
			invunitsmea, 
			updateInvunitsmeaDto, 
		); 
		return await this.invunitsmeasRepository.save(editedInvunitsmea); 
	} 

	async remove(id: string): Promise<Invunitsmea> { 
		const invunitsmea: Invunitsmea = await this.invunitsmeasRepository.findOneBy({ 
			id, 
		}); 
		return await this.invunitsmeasRepository.softRemove(invunitsmea); 
	} 
}