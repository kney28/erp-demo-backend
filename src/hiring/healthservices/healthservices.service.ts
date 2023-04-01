import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { CreateHealthserviceDto } from './dto/create-healthservice.dto'; 
import { UpdateHealthserviceDto } from './dto/update-healthservice.dto'; 
import { Healthservice } from './entities/healthservice.entity'; 

@Injectable() 
export class HealthservicesService { 
	constructor( 
		@InjectRepository(Healthservice) 
		private healthservicesRepository: Repository<Healthservice>, 
	) {} 

	async create(createHealthserviceDto: CreateHealthserviceDto): Promise<Healthservice> { 
		const healthservice: Healthservice = 
			this.healthservicesRepository.create(createHealthserviceDto); 
		return await this.healthservicesRepository.save(healthservice); 
	} 

	findAll(): Promise<Healthservice[]> { 
		return this.healthservicesRepository.find(); 
	} 

	findOne(id: string): Promise<Healthservice> { 
		return this.healthservicesRepository.findOneBy({ id }); 
	} 

	async update( 
		id: string, 
		updateHealthserviceDto: UpdateHealthserviceDto, 
	): Promise<Healthservice> { 
		const healthservice: Healthservice = await this.healthservicesRepository.findOneBy({ 
			id, 
		}); 
		const editedHealthservice: Healthservice = Object.assign( 
			healthservice, 
			updateHealthserviceDto, 
		); 
		return await this.healthservicesRepository.save(editedHealthservice); 
	} 

	async remove(id: string): Promise<Healthservice> { 
		const healthservice: Healthservice = await this.healthservicesRepository.findOneBy({ 
			id, 
		}); 
		return await this.healthservicesRepository.softRemove(healthservice); 
	} 
}