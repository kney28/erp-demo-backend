import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { CreateSisbenlevelDto } from './dto/create-sisbenlevel.dto'; 
import { UpdateSisbenlevelDto } from './dto/update-sisbenlevel.dto'; 
import { Sisbenlevel } from './entities/sisbenlevel.entity'; 

@Injectable() 
export class SisbenlevelsService { 
	constructor( 
		@InjectRepository(Sisbenlevel) 
		private sisbenlevelsRepository: Repository<Sisbenlevel>, 
	) {} 

	async create(createSisbenlevelDto: CreateSisbenlevelDto): Promise<Sisbenlevel> { 
		const sisbenlevel: Sisbenlevel = 
			this.sisbenlevelsRepository.create(createSisbenlevelDto); 
		return await this.sisbenlevelsRepository.save(sisbenlevel); 
	} 

	findAll(): Promise<Sisbenlevel[]> { 
		return this.sisbenlevelsRepository.find(); 
	} 

	findOne(id: string): Promise<Sisbenlevel> { 
		return this.sisbenlevelsRepository.findOneBy({ id }); 
	} 

	async update( 
		id: string, 
		updateSisbenlevelDto: UpdateSisbenlevelDto, 
	): Promise<Sisbenlevel> { 
		const sisbenlevel: Sisbenlevel = await this.sisbenlevelsRepository.findOneBy({ 
			id, 
		}); 
		const editedSisbenlevel: Sisbenlevel = Object.assign( 
			sisbenlevel, 
			updateSisbenlevelDto, 
		); 
		return await this.sisbenlevelsRepository.save(editedSisbenlevel); 
	} 

	async remove(id: string): Promise<Sisbenlevel> { 
		const sisbenlevel: Sisbenlevel = await this.sisbenlevelsRepository.findOneBy({ 
			id, 
		}); 
		return await this.sisbenlevelsRepository.softRemove(sisbenlevel); 
	} 
}