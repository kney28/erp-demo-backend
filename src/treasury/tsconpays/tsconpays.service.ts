import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { CreateTsconpayDto } from './dto/create-tsconpay.dto'; 
import { UpdateTsconpayDto } from './dto/update-tsconpay.dto'; 
import { Tsconpay } from './entities/tsconpay.entity'; 

@Injectable() 
export class TsconpaysService { 
	constructor( 
		@InjectRepository(Tsconpay) 
		private tsconpaysRepository: Repository<Tsconpay>, 
	) {} 

	async create(createTsconpayDto: CreateTsconpayDto): Promise<Tsconpay> { 
		const tsconpay: Tsconpay = 
			this.tsconpaysRepository.create(createTsconpayDto); 
		return await this.tsconpaysRepository.save(tsconpay); 
	} 

	findAll(): Promise<Tsconpay[]> { 
		return this.tsconpaysRepository.find(); 
	} 

	findOne(id: string): Promise<Tsconpay> { 
		return this.tsconpaysRepository.findOneBy({ id }); 
	} 

	async update( 
		id: string, 
		updateTsconpayDto: UpdateTsconpayDto, 
	): Promise<Tsconpay> { 
		const tsconpay: Tsconpay = await this.tsconpaysRepository.findOneBy({ 
			id, 
		}); 
		const editedTsconpay: Tsconpay = Object.assign( 
			tsconpay, 
			updateTsconpayDto, 
		); 
		return await this.tsconpaysRepository.save(editedTsconpay); 
	} 

	async remove(id: string): Promise<Tsconpay> { 
		const tsconpay: Tsconpay = await this.tsconpaysRepository.findOneBy({ 
			id, 
		}); 
		return await this.tsconpaysRepository.softRemove(tsconpay); 
	} 
}