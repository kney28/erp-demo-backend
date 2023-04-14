import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository, Equal } from 'typeorm'; 
import { CreateRequirementslistdetDto } from './dto/create-requirementslistdet.dto'; 
import { UpdateRequirementslistdetDto } from './dto/update-requirementslistdet.dto'; 
import { Requirementslistdet } from './entities/requirementslistdet.entity'; 

@Injectable() 
export class RequirementslistdetsService { 
	constructor( 
		@InjectRepository(Requirementslistdet) 
		private requirementslistdetsRepository: Repository<Requirementslistdet>, 
	) {} 

	async create(createRequirementslistdetDto: CreateRequirementslistdetDto): Promise<Requirementslistdet> { 
		const requirementslistdet: Requirementslistdet = 
			this.requirementslistdetsRepository.create(createRequirementslistdetDto); 
		return await this.requirementslistdetsRepository.save(requirementslistdet); 
	} 

	findAll(): Promise<Requirementslistdet[]> { 
		return this.requirementslistdetsRepository.find(); 
	} 

	findOne(id: string): Promise<Requirementslistdet> { 
		return this.requirementslistdetsRepository.findOneBy({ id }); 
	} 

	findAllByHead(id: number): Promise<Requirementslistdet[]> { 
		return this.requirementslistdetsRepository.findBy({
			listrequirements: Equal(id)
		});
	} 

	async update( 
		id: string, 
		updateRequirementslistdetDto: UpdateRequirementslistdetDto, 
	): Promise<Requirementslistdet> { 
		const requirementslistdet: Requirementslistdet = await this.requirementslistdetsRepository.findOneBy({ 
			id, 
		}); 
		const editedRequirementslistdet: Requirementslistdet = Object.assign( 
			requirementslistdet, 
			updateRequirementslistdetDto, 
		); 
		return await this.requirementslistdetsRepository.save(editedRequirementslistdet); 
	} 

	async remove(id: string): Promise<Requirementslistdet> { 
		const requirementslistdet: Requirementslistdet = await this.requirementslistdetsRepository.findOneBy({ 
			id, 
		}); 
		return await this.requirementslistdetsRepository.softRemove(requirementslistdet); 
	} 
}
