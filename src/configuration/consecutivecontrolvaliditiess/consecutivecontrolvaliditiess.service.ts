import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Equal, Repository } from 'typeorm'; 
import { CreateConsecutivecontrolvaliditiesDto } from './dto/create-consecutivecontrolvalidities.dto'; 
import { UpdateConsecutivecontrolvaliditiesDto } from './dto/update-consecutivecontrolvalidities.dto'; 
import { Consecutivecontrolvalidities } from './entities/consecutivecontrolvalidities.entity'; 

@Injectable() 
export class ConsecutivecontrolvaliditiessService { 
	constructor( 
		@InjectRepository(Consecutivecontrolvalidities) 
		private consecutivecontrolvaliditiessRepository: Repository<Consecutivecontrolvalidities>, 
	) {} 

	async create(createConsecutivecontrolvaliditiesDto: CreateConsecutivecontrolvaliditiesDto): Promise<Consecutivecontrolvalidities> { 
		const consecutivecontrolvalidities: Consecutivecontrolvalidities = 
			this.consecutivecontrolvaliditiessRepository.create(createConsecutivecontrolvaliditiesDto); 
		return await this.consecutivecontrolvaliditiessRepository.save(consecutivecontrolvalidities); 
	} 

	findAll(): Promise<Consecutivecontrolvalidities[]> { 
		return this.consecutivecontrolvaliditiessRepository.find(); 
	}
	
	findAllByHead(id: string): Promise<Consecutivecontrolvalidities[]> { 
		return this.consecutivecontrolvaliditiessRepository.findBy({
			validity: Equal(id)
		});
	} 

	findOne(id: string): Promise<Consecutivecontrolvalidities> { 
		return this.consecutivecontrolvaliditiessRepository.findOneBy({ id }); 
	} 

	async update( 
		id: string, 
		updateConsecutivecontrolvaliditiesDto: UpdateConsecutivecontrolvaliditiesDto, 
	): Promise<Consecutivecontrolvalidities> { 
		const consecutivecontrolvalidities: Consecutivecontrolvalidities = await this.consecutivecontrolvaliditiessRepository.findOneBy({ 
			id, 
		}); 
		const editedConsecutivecontrolvalidities: Consecutivecontrolvalidities = Object.assign( 
			consecutivecontrolvalidities, 
			updateConsecutivecontrolvaliditiesDto, 
		); 
		return await this.consecutivecontrolvaliditiessRepository.save(editedConsecutivecontrolvalidities); 
	} 

	async remove(id: string): Promise<Consecutivecontrolvalidities> { 
		const consecutivecontrolvalidities: Consecutivecontrolvalidities = await this.consecutivecontrolvaliditiessRepository.findOneBy({ 
			id, 
		}); 
		return await this.consecutivecontrolvaliditiessRepository.softRemove(consecutivecontrolvalidities); 
	} 
}