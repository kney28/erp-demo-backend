import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { CreateHcclassanestrecordDto } from './dto/create-hcclassanestrecord.dto'; 
import { UpdateHcclassanestrecordDto } from './dto/update-hcclassanestrecord.dto'; 
import { Hcclassanestrecord } from './entities/hcclassanestrecord.entity'; 

@Injectable() 
export class HcclassanestrecordsService { 
	constructor( 
		@InjectRepository(Hcclassanestrecord) 
		private hcclassanestrecordsRepository: Repository<Hcclassanestrecord>, 
	) {} 

	async create(createHcclassanestrecordDto: CreateHcclassanestrecordDto): Promise<Hcclassanestrecord> { 
		const hcclassanestrecord: Hcclassanestrecord = 
			this.hcclassanestrecordsRepository.create(createHcclassanestrecordDto); 
		return await this.hcclassanestrecordsRepository.save(hcclassanestrecord); 
	} 

	findAll(): Promise<Hcclassanestrecord[]> { 
		return this.hcclassanestrecordsRepository.find(); 
	} 

	findOne(id: string): Promise<Hcclassanestrecord> { 
		return this.hcclassanestrecordsRepository.findOneBy({ id }); 
	} 

	async update( 
		id: string, 
		updateHcclassanestrecordDto: UpdateHcclassanestrecordDto, 
	): Promise<Hcclassanestrecord> { 
		const hcclassanestrecord: Hcclassanestrecord = await this.hcclassanestrecordsRepository.findOneBy({ 
			id, 
		}); 
		const editedHcclassanestrecord: Hcclassanestrecord = Object.assign( 
			hcclassanestrecord, 
			updateHcclassanestrecordDto, 
		); 
		return await this.hcclassanestrecordsRepository.save(editedHcclassanestrecord); 
	} 

	async remove(id: string): Promise<Hcclassanestrecord> { 
		const hcclassanestrecord: Hcclassanestrecord = await this.hcclassanestrecordsRepository.findOneBy({ 
			id, 
		}); 
		return await this.hcclassanestrecordsRepository.softRemove(hcclassanestrecord); 
	} 
}