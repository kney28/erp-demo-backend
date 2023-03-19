import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { CreateHchealthproDto } from './dto/create-hchealthpro.dto'; 
import { UpdateHchealthproDto } from './dto/update-hchealthpro.dto'; 
import { Hchealthpro } from './entities/hchealthpro.entity'; 

@Injectable() 
export class HchealthprosService { 
	constructor( 
		@InjectRepository(Hchealthpro) 
		private hchealthprosRepository: Repository<Hchealthpro>, 
	) {} 

	async create(createHchealthproDto: CreateHchealthproDto): Promise<Hchealthpro> { 
		const hchealthpro: Hchealthpro = 
			this.hchealthprosRepository.create(createHchealthproDto); 
		return await this.hchealthprosRepository.save(hchealthpro); 
	} 

	findAll(): Promise<Hchealthpro[]> { 
		return this.hchealthprosRepository.find(); 
	} 

	findOne(id: string): Promise<Hchealthpro> { 
		return this.hchealthprosRepository.findOneBy({ id }); 
	} 

	async update( 
		id: string, 
		updateHchealthproDto: UpdateHchealthproDto, 
	): Promise<Hchealthpro> { 
		const hchealthpro: Hchealthpro = await this.hchealthprosRepository.findOneBy({ 
			id, 
		}); 
		const editedHchealthpro: Hchealthpro = Object.assign( 
			hchealthpro, 
			updateHchealthproDto, 
		); 
		return await this.hchealthprosRepository.save(editedHchealthpro); 
	} 

	async remove(id: string): Promise<Hchealthpro> { 
		const hchealthpro: Hchealthpro = await this.hchealthprosRepository.findOneBy({ 
			id, 
		}); 
		return await this.hchealthprosRepository.softRemove(hchealthpro); 
	} 
}