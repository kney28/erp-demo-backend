import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { CreateCareserviceDto } from './dto/create-careservice.dto'; 
import { UpdateCareserviceDto } from './dto/update-careservice.dto'; 
import { Careservice } from './entities/careservice.entity'; 

@Injectable() 
export class CareservicesService { 
	constructor( 
		@InjectRepository(Careservice) 
		private careservicesRepository: Repository<Careservice>, 
	) {} 

	async create(createCareserviceDto: CreateCareserviceDto): Promise<Careservice> { 
		const careservice: Careservice = 
			this.careservicesRepository.create(createCareserviceDto); 
		return await this.careservicesRepository.save(careservice); 
	} 

	findAll(): Promise<Careservice[]> { 
		return this.careservicesRepository.find(); 
	} 

	findOne(id: string): Promise<Careservice> { 
		return this.careservicesRepository.findOneBy({ id }); 
	} 

	async update( 
		id: string, 
		updateCareserviceDto: UpdateCareserviceDto, 
	): Promise<Careservice> { 
		const careservice: Careservice = await this.careservicesRepository.findOneBy({ 
			id, 
		}); 
		const editedCareservice: Careservice = Object.assign( 
			careservice, 
			updateCareserviceDto, 
		); 
		return await this.careservicesRepository.save(editedCareservice); 
	} 

	async remove(id: string): Promise<Careservice> { 
		const careservice: Careservice = await this.careservicesRepository.findOneBy({ 
			id, 
		}); 
		return await this.careservicesRepository.softRemove(careservice); 
	} 
}