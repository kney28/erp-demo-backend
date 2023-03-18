import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { CreateAccbeginningbalancesdet3Dto } from './dto/create-accbeginningbalancesdet3.dto'; 
import { UpdateAccbeginningbalancesdet3Dto } from './dto/update-accbeginningbalancesdet3.dto'; 
import { Accbeginningbalancesdet3 } from './entities/accbeginningbalancesdet3.entity'; 

@Injectable() 
export class Accbeginningbalancesdet3sService { 
	constructor( 
		@InjectRepository(Accbeginningbalancesdet3) 
		private accbeginningbalancesdet3sRepository: Repository<Accbeginningbalancesdet3>, 
	) {} 

	async create(createAccbeginningbalancesdet3Dto: CreateAccbeginningbalancesdet3Dto): Promise<Accbeginningbalancesdet3> { 
		const accbeginningbalancesdet3: Accbeginningbalancesdet3 = 
			this.accbeginningbalancesdet3sRepository.create(createAccbeginningbalancesdet3Dto); 
		return await this.accbeginningbalancesdet3sRepository.save(accbeginningbalancesdet3); 
	} 

	findAll(): Promise<Accbeginningbalancesdet3[]> { 
		return this.accbeginningbalancesdet3sRepository.find(); 
	} 

	findOne(id: string): Promise<Accbeginningbalancesdet3> { 
		return this.accbeginningbalancesdet3sRepository.findOneBy({ id }); 
	} 

	async update( 
		id: string, 
		updateAccbeginningbalancesdet3Dto: UpdateAccbeginningbalancesdet3Dto, 
	): Promise<Accbeginningbalancesdet3> { 
		const accbeginningbalancesdet3: Accbeginningbalancesdet3 = await this.accbeginningbalancesdet3sRepository.findOneBy({ 
			id, 
		}); 
		const editedAccbeginningbalancesdet3: Accbeginningbalancesdet3 = Object.assign( 
			accbeginningbalancesdet3, 
			updateAccbeginningbalancesdet3Dto, 
		); 
		return await this.accbeginningbalancesdet3sRepository.save(editedAccbeginningbalancesdet3); 
	} 

	async remove(id: string): Promise<Accbeginningbalancesdet3> { 
		const accbeginningbalancesdet3: Accbeginningbalancesdet3 = await this.accbeginningbalancesdet3sRepository.findOneBy({ 
			id, 
		}); 
		return await this.accbeginningbalancesdet3sRepository.softRemove(accbeginningbalancesdet3); 
	} 
}