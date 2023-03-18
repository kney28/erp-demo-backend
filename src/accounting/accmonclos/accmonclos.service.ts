import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { CreateAccmoncloDto } from './dto/create-accmonclo.dto'; 
import { UpdateAccmoncloDto } from './dto/update-accmonclo.dto'; 
import { Accmonclo } from './entities/accmonclo.entity'; 

@Injectable() 
export class AccmonclosService { 
	constructor( 
		@InjectRepository(Accmonclo) 
		private accmonclosRepository: Repository<Accmonclo>, 
	) {} 

	async create(createAccmoncloDto: CreateAccmoncloDto): Promise<Accmonclo> { 
		const accmonclo: Accmonclo = 
			this.accmonclosRepository.create(createAccmoncloDto); 
		return await this.accmonclosRepository.save(accmonclo); 
	} 

	findAll(): Promise<Accmonclo[]> { 
		return this.accmonclosRepository.find(); 
	} 

	findOne(id: string): Promise<Accmonclo> { 
		return this.accmonclosRepository.findOneBy({ id }); 
	} 

	async update( 
		id: string, 
		updateAccmoncloDto: UpdateAccmoncloDto, 
	): Promise<Accmonclo> { 
		const accmonclo: Accmonclo = await this.accmonclosRepository.findOneBy({ 
			id, 
		}); 
		const editedAccmonclo: Accmonclo = Object.assign( 
			accmonclo, 
			updateAccmoncloDto, 
		); 
		return await this.accmonclosRepository.save(editedAccmonclo); 
	} 

	async remove(id: string): Promise<Accmonclo> { 
		const accmonclo: Accmonclo = await this.accmonclosRepository.findOneBy({ 
			id, 
		}); 
		return await this.accmonclosRepository.softRemove(accmonclo); 
	} 
}