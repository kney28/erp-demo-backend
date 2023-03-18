import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { CreateInvaccparDto } from './dto/create-invaccpar.dto'; 
import { UpdateInvaccparDto } from './dto/update-invaccpar.dto'; 
import { Invaccpar } from './entities/invaccpar.entity'; 

@Injectable() 
export class InvaccparsService { 
	constructor( 
		@InjectRepository(Invaccpar) 
		private invaccparsRepository: Repository<Invaccpar>, 
	) {} 

	async create(createInvaccparDto: CreateInvaccparDto): Promise<Invaccpar> { 
		const invaccpar: Invaccpar = 
			this.invaccparsRepository.create(createInvaccparDto); 
		return await this.invaccparsRepository.save(invaccpar); 
	} 

	findAll(): Promise<Invaccpar[]> { 
		return this.invaccparsRepository.find(); 
	} 

	findOne(id: string): Promise<Invaccpar> { 
		return this.invaccparsRepository.findOneBy({ id }); 
	} 

	async update( 
		id: string, 
		updateInvaccparDto: UpdateInvaccparDto, 
	): Promise<Invaccpar> { 
		const invaccpar: Invaccpar = await this.invaccparsRepository.findOneBy({ 
			id, 
		}); 
		const editedInvaccpar: Invaccpar = Object.assign( 
			invaccpar, 
			updateInvaccparDto, 
		); 
		return await this.invaccparsRepository.save(editedInvaccpar); 
	} 

	async remove(id: string): Promise<Invaccpar> { 
		const invaccpar: Invaccpar = await this.invaccparsRepository.findOneBy({ 
			id, 
		}); 
		return await this.invaccparsRepository.softRemove(invaccpar); 
	} 
}