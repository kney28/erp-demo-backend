import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { CreateRequirementslistDto } from './dto/create-requirementslist.dto'; 
import { UpdateRequirementslistDto } from './dto/update-requirementslist.dto'; 
import { Requirementslist } from './entities/requirementslist.entity'; 

@Injectable() 
export class RequirementslistsService { 
	constructor( 
		@InjectRepository(Requirementslist) 
		private requirementslistsRepository: Repository<Requirementslist>, 
	) {} 

	async create(createRequirementslistDto: CreateRequirementslistDto): Promise<Requirementslist> { 
		const requirementslist: Requirementslist = 
			this.requirementslistsRepository.create(createRequirementslistDto); 
		return await this.requirementslistsRepository.save(requirementslist); 
	} 

	findAll(): Promise<Requirementslist[]> { 
		return this.requirementslistsRepository.find(); 
	} 

	findOne(id: string): Promise<Requirementslist> { 
		return this.requirementslistsRepository.findOneBy({ id }); 
	} 

	async update( 
		id: string, 
		updateRequirementslistDto: UpdateRequirementslistDto, 
	): Promise<Requirementslist> { 
		const requirementslist: Requirementslist = await this.requirementslistsRepository.findOneBy({ 
			id, 
		}); 
		const editedRequirementslist: Requirementslist = Object.assign( 
			requirementslist, 
			updateRequirementslistDto, 
		); 
		return await this.requirementslistsRepository.save(editedRequirementslist); 
	} 

	async remove(id: string): Promise<Requirementslist> { 
		const requirementslist: Requirementslist = await this.requirementslistsRepository.findOneBy({ 
			id, 
		}); 
		return await this.requirementslistsRepository.softRemove(requirementslist); 
	} 
}
