import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { CreateAccbalmovDto } from './dto/create-accbalmov.dto'; 
import { UpdateAccbalmovDto } from './dto/update-accbalmov.dto'; 
import { Accbalmov } from './entities/accbalmov.entity'; 

@Injectable() 
export class AccbalmovsService { 
	constructor( 
		@InjectRepository(Accbalmov) 
		private accbalmovsRepository: Repository<Accbalmov>, 
	) {} 

	async create(createAccbalmovDto: CreateAccbalmovDto): Promise<Accbalmov> { 
		const accbalmov: Accbalmov = 
			this.accbalmovsRepository.create(createAccbalmovDto); 
		return await this.accbalmovsRepository.save(accbalmov); 
	} 

	findAll(): Promise<Accbalmov[]> { 
		return this.accbalmovsRepository.find(); 
	} 

	findOne(id: string): Promise<Accbalmov> { 
		return this.accbalmovsRepository.findOneBy({ id }); 
	} 

	async update( 
		id: string, 
		updateAccbalmovDto: UpdateAccbalmovDto, 
	): Promise<Accbalmov> { 
		const accbalmov: Accbalmov = await this.accbalmovsRepository.findOneBy({ 
			id, 
		}); 
		const editedAccbalmov: Accbalmov = Object.assign( 
			accbalmov, 
			updateAccbalmovDto, 
		); 
		return await this.accbalmovsRepository.save(editedAccbalmov); 
	} 

	async remove(id: string): Promise<Accbalmov> { 
		const accbalmov: Accbalmov = await this.accbalmovsRepository.findOneBy({ 
			id, 
		}); 
		return await this.accbalmovsRepository.softRemove(accbalmov); 
	} 
}