import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { CreateGooparDto } from './dto/create-goopar.dto'; 
import { UpdateGooparDto } from './dto/update-goopar.dto'; 
import { Goopar } from './entities/goopar.entity'; 

@Injectable() 
export class GooparsService { 
	constructor( 
		@InjectRepository(Goopar) 
		private gooparsRepository: Repository<Goopar>, 
	) {} 

	async create(createGooparDto: CreateGooparDto): Promise<Goopar> { 
		const goopar: Goopar = 
			this.gooparsRepository.create(createGooparDto); 
		return await this.gooparsRepository.save(goopar); 
	} 

	findAll(): Promise<Goopar[]> { 
		return this.gooparsRepository.find(); 
	} 

	findOne(id: string): Promise<Goopar> { 
		return this.gooparsRepository.findOneBy({ id }); 
	} 

	async update( 
		id: string, 
		updateGooparDto: UpdateGooparDto, 
	): Promise<Goopar> { 
		const goopar: Goopar = await this.gooparsRepository.findOneBy({ 
			id, 
		}); 
		const editedGoopar: Goopar = Object.assign( 
			goopar, 
			updateGooparDto, 
		); 
		return await this.gooparsRepository.save(editedGoopar); 
	} 

	async remove(id: string): Promise<Goopar> { 
		const goopar: Goopar = await this.gooparsRepository.findOneBy({ 
			id, 
		}); 
		return await this.gooparsRepository.softRemove(goopar); 
	} 
}