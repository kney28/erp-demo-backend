import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { CreateFeeDto } from './dto/create-fee.dto'; 
import { UpdateFeeDto } from './dto/update-fee.dto'; 
import { Fee } from './entities/fee.entity'; 

@Injectable() 
export class FeesService { 
	constructor( 
		@InjectRepository(Fee) 
		private feesRepository: Repository<Fee>, 
	) {} 

	async create(createFeeDto: CreateFeeDto): Promise<Fee> { 
		const fee: Fee = 
			this.feesRepository.create(createFeeDto); 
		return await this.feesRepository.save(fee); 
	} 

	findAll(): Promise<Fee[]> { 
		return this.feesRepository.find(); 
	} 

	findOne(id: string): Promise<Fee> { 
		return this.feesRepository.findOneBy({ id }); 
	} 

	async update( 
		id: string, 
		updateFeeDto: UpdateFeeDto, 
	): Promise<Fee> { 
		const fee: Fee = await this.feesRepository.findOneBy({ 
			id, 
		}); 
		const editedFee: Fee = Object.assign( 
			fee, 
			updateFeeDto, 
		); 
		return await this.feesRepository.save(editedFee); 
	} 

	async remove(id: string): Promise<Fee> { 
		const fee: Fee = await this.feesRepository.findOneBy({ 
			id, 
		}); 
		return await this.feesRepository.softRemove(fee); 
	} 
}