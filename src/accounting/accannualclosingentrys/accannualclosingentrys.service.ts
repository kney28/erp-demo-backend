import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { CreateAccannualclosingentryDto } from './dto/create-accannualclosingentry.dto'; 
import { UpdateAccannualclosingentryDto } from './dto/update-accannualclosingentry.dto'; 
import { Accannualclosingentry } from './entities/accannualclosingentry.entity'; 

@Injectable() 
export class AccannualclosingentrysService { 
	constructor( 
		@InjectRepository(Accannualclosingentry) 
		private accannualclosingentrysRepository: Repository<Accannualclosingentry>, 
	) {} 

	async create(createAccannualclosingentryDto: CreateAccannualclosingentryDto): Promise<Accannualclosingentry> { 
		const accannualclosingentry: Accannualclosingentry = 
			this.accannualclosingentrysRepository.create(createAccannualclosingentryDto); 
		return await this.accannualclosingentrysRepository.save(accannualclosingentry); 
	} 

	findAll(): Promise<Accannualclosingentry[]> { 
		return this.accannualclosingentrysRepository.find(); 
	} 

	findOne(id: string): Promise<Accannualclosingentry> { 
		return this.accannualclosingentrysRepository.findOneBy({ id }); 
	} 

	async update( 
		id: string, 
		updateAccannualclosingentryDto: UpdateAccannualclosingentryDto, 
	): Promise<Accannualclosingentry> { 
		const accannualclosingentry: Accannualclosingentry = await this.accannualclosingentrysRepository.findOneBy({ 
			id, 
		}); 
		const editedAccannualclosingentry: Accannualclosingentry = Object.assign( 
			accannualclosingentry, 
			updateAccannualclosingentryDto, 
		); 
		return await this.accannualclosingentrysRepository.save(editedAccannualclosingentry); 
	} 

	async remove(id: string): Promise<Accannualclosingentry> { 
		const accannualclosingentry: Accannualclosingentry = await this.accannualclosingentrysRepository.findOneBy({ 
			id, 
		}); 
		return await this.accannualclosingentrysRepository.softRemove(accannualclosingentry); 
	} 
}