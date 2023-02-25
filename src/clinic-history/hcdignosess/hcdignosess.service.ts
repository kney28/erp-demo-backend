import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { CreateHcdignosesDto } from './dto/create-hcdignoses.dto'; 
import { UpdateHcdignosesDto } from './dto/update-hcdignoses.dto'; 
import { Hcdignoses } from './entities/hcdignoses.entity'; 

@Injectable() 
export class HcdignosessService { 
	constructor( 
		@InjectRepository(Hcdignoses) 
		private hcdignosessRepository: Repository<Hcdignoses>, 
	) {} 

	async create(createHcdignosesDto: CreateHcdignosesDto): Promise<Hcdignoses> { 
		const hcdignoses: Hcdignoses = 
			this.hcdignosessRepository.create(createHcdignosesDto); 
		return await this.hcdignosessRepository.save(hcdignoses); 
	} 

	findAll(): Promise<Hcdignoses[]> { 
		return this.hcdignosessRepository.find(); 
	} 

	findOne(id: string): Promise<Hcdignoses> { 
		return this.hcdignosessRepository.findOneBy({ id }); 
	} 

	async update( 
		id: string, 
		updateHcdignosesDto: UpdateHcdignosesDto, 
	): Promise<Hcdignoses> { 
		const hcdignoses: Hcdignoses = await this.hcdignosessRepository.findOneBy({ 
			id, 
		}); 
		const editedHcdignoses: Hcdignoses = Object.assign( 
			hcdignoses, 
			updateHcdignosesDto, 
		); 
		return await this.hcdignosessRepository.save(editedHcdignoses); 
	} 

	async remove(id: string): Promise<Hcdignoses> { 
		const hcdignoses: Hcdignoses = await this.hcdignosessRepository.findOneBy({ 
			id, 
		}); 
		return await this.hcdignosessRepository.softRemove(hcdignoses); 
	} 
}