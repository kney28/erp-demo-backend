import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { CreateAccmontopeDto } from './dto/create-accmontope.dto'; 
import { UpdateAccmontopeDto } from './dto/update-accmontope.dto'; 
import { Accmontope } from './entities/accmontope.entity'; 

@Injectable() 
export class AccmontopesService { 
	constructor( 
		@InjectRepository(Accmontope) 
		private accmontopesRepository: Repository<Accmontope>, 
	) {} 

	async create(createAccmontopeDto: CreateAccmontopeDto): Promise<Accmontope> { 
		const accmontope: Accmontope = 
			this.accmontopesRepository.create(createAccmontopeDto); 
		return await this.accmontopesRepository.save(accmontope); 
	} 

	findAll(): Promise<Accmontope[]> { 
		return this.accmontopesRepository.find(); 
	} 

	findOne(id: string): Promise<Accmontope> { 
		return this.accmontopesRepository.findOneBy({ id }); 
	} 

	async update( 
		id: string, 
		updateAccmontopeDto: UpdateAccmontopeDto, 
	): Promise<Accmontope> { 
		const accmontope: Accmontope = await this.accmontopesRepository.findOneBy({ 
			id, 
		}); 
		const editedAccmontope: Accmontope = Object.assign( 
			accmontope, 
			updateAccmontopeDto, 
		); 
		return await this.accmontopesRepository.save(editedAccmontope); 
	} 

	async remove(id: string): Promise<Accmontope> { 
		const accmontope: Accmontope = await this.accmontopesRepository.findOneBy({ 
			id, 
		}); 
		return await this.accmontopesRepository.softRemove(accmontope); 
	} 
}