import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { CreateBedDto } from './dto/create-bed.dto'; 
import { UpdateBedDto } from './dto/update-bed.dto'; 
import { Bed } from './entities/bed.entity'; 

@Injectable() 
export class BedsService { 
	constructor( 
		@InjectRepository(Bed) 
		private bedsRepository: Repository<Bed>, 
	) {} 

	async create(createBedDto: CreateBedDto): Promise<Bed> { 
		const bed: Bed = 
			this.bedsRepository.create(createBedDto); 
		return await this.bedsRepository.save(bed); 
	} 

	findAll(): Promise<Bed[]> { 
		return this.bedsRepository.find(); 
	} 

	findOne(id: string): Promise<Bed> { 
		return this.bedsRepository.findOneBy({ id }); 
	} 

	async update( 
		id: string, 
		updateBedDto: UpdateBedDto, 
	): Promise<Bed> { 
		const bed: Bed = await this.bedsRepository.findOneBy({ 
			id, 
		}); 
		const editedBed: Bed = Object.assign( 
			bed, 
			updateBedDto, 
		); 
		return await this.bedsRepository.save(editedBed); 
	} 

	async remove(id: string): Promise<Bed> { 
		const bed: Bed = await this.bedsRepository.findOneBy({ 
			id, 
		}); 
		return await this.bedsRepository.softRemove(bed); 
	} 
}