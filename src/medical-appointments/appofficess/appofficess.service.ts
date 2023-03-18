import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { CreateAppofficesDto } from './dto/create-appoffices.dto'; 
import { UpdateAppofficesDto } from './dto/update-appoffices.dto'; 
import { Appoffices } from './entities/appoffices.entity'; 

@Injectable() 
export class AppofficessService { 
	constructor( 
		@InjectRepository(Appoffices) 
		private appofficessRepository: Repository<Appoffices>, 
	) {} 

	async create(createAppofficesDto: CreateAppofficesDto): Promise<Appoffices> { 
		const appoffices: Appoffices = 
			this.appofficessRepository.create(createAppofficesDto); 
		return await this.appofficessRepository.save(appoffices); 
	} 

	findAll(): Promise<Appoffices[]> { 
		return this.appofficessRepository.find(); 
	} 

	findOne(id: string): Promise<Appoffices> { 
		return this.appofficessRepository.findOneBy({ id }); 
	} 

	async update( 
		id: string, 
		updateAppofficesDto: UpdateAppofficesDto, 
	): Promise<Appoffices> { 
		const appoffices: Appoffices = await this.appofficessRepository.findOneBy({ 
			id, 
		}); 
		const editedAppoffices: Appoffices = Object.assign( 
			appoffices, 
			updateAppofficesDto, 
		); 
		return await this.appofficessRepository.save(editedAppoffices); 
	} 

	async remove(id: string): Promise<Appoffices> { 
		const appoffices: Appoffices = await this.appofficessRepository.findOneBy({ 
			id, 
		}); 
		return await this.appofficessRepository.softRemove(appoffices); 
	} 
}