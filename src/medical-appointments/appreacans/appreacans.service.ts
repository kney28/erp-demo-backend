import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { CreateAppreacanDto } from './dto/create-appreacan.dto'; 
import { UpdateAppreacanDto } from './dto/update-appreacan.dto'; 
import { Appreacan } from './entities/appreacan.entity'; 

@Injectable() 
export class AppreacansService { 
	constructor( 
		@InjectRepository(Appreacan) 
		private appreacansRepository: Repository<Appreacan>, 
	) {} 

	async create(createAppreacanDto: CreateAppreacanDto): Promise<Appreacan> { 
		const appreacan: Appreacan = 
			this.appreacansRepository.create(createAppreacanDto); 
		return await this.appreacansRepository.save(appreacan); 
	} 

	findAll(): Promise<Appreacan[]> { 
		return this.appreacansRepository.find(); 
	} 

	findOne(id: string): Promise<Appreacan> { 
		return this.appreacansRepository.findOneBy({ id }); 
	} 

	async update( 
		id: string, 
		updateAppreacanDto: UpdateAppreacanDto, 
	): Promise<Appreacan> { 
		const appreacan: Appreacan = await this.appreacansRepository.findOneBy({ 
			id, 
		}); 
		const editedAppreacan: Appreacan = Object.assign( 
			appreacan, 
			updateAppreacanDto, 
		); 
		return await this.appreacansRepository.save(editedAppreacan); 
	} 

	async remove(id: string): Promise<Appreacan> { 
		const appreacan: Appreacan = await this.appreacansRepository.findOneBy({ 
			id, 
		}); 
		return await this.appreacansRepository.softRemove(appreacan); 
	} 
}