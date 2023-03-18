import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { CreateAccbeginningbalancesdetDto } from './dto/create-accbeginningbalancesdet.dto'; 
import { UpdateAccbeginningbalancesdetDto } from './dto/update-accbeginningbalancesdet.dto'; 
import { Accbeginningbalancesdet } from './entities/accbeginningbalancesdet.entity'; 

@Injectable() 
export class AccbeginningbalancesdetsService { 
	constructor( 
		@InjectRepository(Accbeginningbalancesdet) 
		private accbeginningbalancesdetsRepository: Repository<Accbeginningbalancesdet>, 
	) {} 

	async create(createAccbeginningbalancesdetDto: CreateAccbeginningbalancesdetDto): Promise<Accbeginningbalancesdet> { 
		const accbeginningbalancesdet: Accbeginningbalancesdet = 
			this.accbeginningbalancesdetsRepository.create(createAccbeginningbalancesdetDto); 
		return await this.accbeginningbalancesdetsRepository.save(accbeginningbalancesdet); 
	} 

	findAll(): Promise<Accbeginningbalancesdet[]> { 
		return this.accbeginningbalancesdetsRepository.find(); 
	} 

	findOne(id: string): Promise<Accbeginningbalancesdet> { 
		return this.accbeginningbalancesdetsRepository.findOneBy({ id }); 
	} 

	async update( 
		id: string, 
		updateAccbeginningbalancesdetDto: UpdateAccbeginningbalancesdetDto, 
	): Promise<Accbeginningbalancesdet> { 
		const accbeginningbalancesdet: Accbeginningbalancesdet = await this.accbeginningbalancesdetsRepository.findOneBy({ 
			id, 
		}); 
		const editedAccbeginningbalancesdet: Accbeginningbalancesdet = Object.assign( 
			accbeginningbalancesdet, 
			updateAccbeginningbalancesdetDto, 
		); 
		return await this.accbeginningbalancesdetsRepository.save(editedAccbeginningbalancesdet); 
	} 

	async remove(id: string): Promise<Accbeginningbalancesdet> { 
		const accbeginningbalancesdet: Accbeginningbalancesdet = await this.accbeginningbalancesdetsRepository.findOneBy({ 
			id, 
		}); 
		return await this.accbeginningbalancesdetsRepository.softRemove(accbeginningbalancesdet); 
	} 
}