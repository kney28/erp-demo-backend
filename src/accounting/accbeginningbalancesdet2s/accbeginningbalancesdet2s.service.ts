import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { CreateAccbeginningbalancesdet2Dto } from './dto/create-accbeginningbalancesdet2.dto'; 
import { UpdateAccbeginningbalancesdet2Dto } from './dto/update-accbeginningbalancesdet2.dto'; 
import { Accbeginningbalancesdet2 } from './entities/accbeginningbalancesdet2.entity'; 

@Injectable() 
export class Accbeginningbalancesdet2sService { 
	constructor( 
		@InjectRepository(Accbeginningbalancesdet2) 
		private accbeginningbalancesdet2sRepository: Repository<Accbeginningbalancesdet2>, 
	) {} 

	async create(createAccbeginningbalancesdet2Dto: CreateAccbeginningbalancesdet2Dto): Promise<Accbeginningbalancesdet2> { 
		const accbeginningbalancesdet2: Accbeginningbalancesdet2 = 
			this.accbeginningbalancesdet2sRepository.create(createAccbeginningbalancesdet2Dto); 
		return await this.accbeginningbalancesdet2sRepository.save(accbeginningbalancesdet2); 
	} 

	findAll(): Promise<Accbeginningbalancesdet2[]> { 
		return this.accbeginningbalancesdet2sRepository.find(); 
	} 

	findOne(id: string): Promise<Accbeginningbalancesdet2> { 
		return this.accbeginningbalancesdet2sRepository.findOneBy({ id }); 
	} 

	async update( 
		id: string, 
		updateAccbeginningbalancesdet2Dto: UpdateAccbeginningbalancesdet2Dto, 
	): Promise<Accbeginningbalancesdet2> { 
		const accbeginningbalancesdet2: Accbeginningbalancesdet2 = await this.accbeginningbalancesdet2sRepository.findOneBy({ 
			id, 
		}); 
		const editedAccbeginningbalancesdet2: Accbeginningbalancesdet2 = Object.assign( 
			accbeginningbalancesdet2, 
			updateAccbeginningbalancesdet2Dto, 
		); 
		return await this.accbeginningbalancesdet2sRepository.save(editedAccbeginningbalancesdet2); 
	} 

	async remove(id: string): Promise<Accbeginningbalancesdet2> { 
		const accbeginningbalancesdet2: Accbeginningbalancesdet2 = await this.accbeginningbalancesdet2sRepository.findOneBy({ 
			id, 
		}); 
		return await this.accbeginningbalancesdet2sRepository.softRemove(accbeginningbalancesdet2); 
	} 
}