import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { CreateSubcatcupsDto } from './dto/create-subcatcups.dto'; 
import { UpdateSubcatcupsDto } from './dto/update-subcatcups.dto'; 
import { Subcatcups } from './entities/subcatcups.entity'; 

@Injectable() 
export class SubcatcupssService { 
	constructor( 
		@InjectRepository(Subcatcups) 
		private subcatcupssRepository: Repository<Subcatcups>, 
	) {} 

	async create(createSubcatcupsDto: CreateSubcatcupsDto): Promise<Subcatcups> { 
		const subcatcups: Subcatcups = 
			this.subcatcupssRepository.create(createSubcatcupsDto); 
		return await this.subcatcupssRepository.save(subcatcups); 
	} 

	findAll(): Promise<Subcatcups[]> { 
		return this.subcatcupssRepository.find(); 
	} 

	findOne(id: string): Promise<Subcatcups> { 
		return this.subcatcupssRepository.findOneBy({ id }); 
	} 

	async update( 
		id: string, 
		updateSubcatcupsDto: UpdateSubcatcupsDto, 
	): Promise<Subcatcups> { 
		const subcatcups: Subcatcups = await this.subcatcupssRepository.findOneBy({ 
			id, 
		}); 
		const editedSubcatcups: Subcatcups = Object.assign( 
			subcatcups, 
			updateSubcatcupsDto, 
		); 
		return await this.subcatcupssRepository.save(editedSubcatcups); 
	} 

	async remove(id: string): Promise<Subcatcups> { 
		const subcatcups: Subcatcups = await this.subcatcupssRepository.findOneBy({ 
			id, 
		}); 
		return await this.subcatcupssRepository.softRemove(subcatcups); 
	} 
}