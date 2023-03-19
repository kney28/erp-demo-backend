import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { CreateAccbeginningbalancesDto } from './dto/create-accbeginningbalances.dto'; 
import { UpdateAccbeginningbalancesDto } from './dto/update-accbeginningbalances.dto'; 
import { Accbeginningbalances } from './entities/accbeginningbalances.entity'; 

@Injectable() 
export class AccbeginningbalancessService { 
	constructor( 
		@InjectRepository(Accbeginningbalances) 
		private accbeginningbalancessRepository: Repository<Accbeginningbalances>, 
	) {} 

	async create(createAccbeginningbalancesDto: CreateAccbeginningbalancesDto): Promise<Accbeginningbalances> { 
		const accbeginningbalances: Accbeginningbalances = 
			this.accbeginningbalancessRepository.create(createAccbeginningbalancesDto); 
		return await this.accbeginningbalancessRepository.save(accbeginningbalances); 
	} 

	findAll(): Promise<Accbeginningbalances[]> { 
		return this.accbeginningbalancessRepository.find(); 
	} 

	findOne(id: string): Promise<Accbeginningbalances> { 
		return this.accbeginningbalancessRepository.findOneBy({ id }); 
	} 

	async update( 
		id: string, 
		updateAccbeginningbalancesDto: UpdateAccbeginningbalancesDto, 
	): Promise<Accbeginningbalances> { 
		const accbeginningbalances: Accbeginningbalances = await this.accbeginningbalancessRepository.findOneBy({ 
			id, 
		}); 
		const editedAccbeginningbalances: Accbeginningbalances = Object.assign( 
			accbeginningbalances, 
			updateAccbeginningbalancesDto, 
		); 
		return await this.accbeginningbalancessRepository.save(editedAccbeginningbalances); 
	} 

	async remove(id: string): Promise<Accbeginningbalances> { 
		const accbeginningbalances: Accbeginningbalances = await this.accbeginningbalancessRepository.findOneBy({ 
			id, 
		}); 
		return await this.accbeginningbalancessRepository.softRemove(accbeginningbalances); 
	} 
}