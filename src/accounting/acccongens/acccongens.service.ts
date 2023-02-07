import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { CreateAcccongenDto } from './dto/create-acccongen.dto'; 
import { UpdateAcccongenDto } from './dto/update-acccongen.dto'; 
import { Acccongen } from './entities/acccongen.entity'; 

@Injectable() 
export class AcccongensService { 
	constructor( 
		@InjectRepository(Acccongen) 
		private acccongensRepository: Repository<Acccongen>, 
	) {} 

	async create(createAcccongenDto: CreateAcccongenDto): Promise<Acccongen> { 
		const acccongen: Acccongen = 
			this.acccongensRepository.create(createAcccongenDto); 
		return await this.acccongensRepository.save(acccongen); 
	} 

	findAll(): Promise<Acccongen[]> { 
		return this.acccongensRepository.find(); 
	} 

	findOne(id: string): Promise<Acccongen> { 
		return this.acccongensRepository.findOneBy({ id }); 
	} 

	async update( 
		id: string, 
		updateAcccongenDto: UpdateAcccongenDto, 
	): Promise<Acccongen> { 
		const acccongen: Acccongen = await this.acccongensRepository.findOneBy({ 
			id, 
		}); 
		const editedAcccongen: Acccongen = Object.assign( 
			acccongen, 
			updateAcccongenDto, 
		); 
		return await this.acccongensRepository.save(editedAcccongen); 
	} 

	async remove(id: string): Promise<Acccongen> { 
		const acccongen: Acccongen = await this.acccongensRepository.findOneBy({ 
			id, 
		}); 
		return await this.acccongensRepository.softRemove(acccongen); 
	} 
}