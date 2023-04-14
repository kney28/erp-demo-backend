import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Equal, Repository } from 'typeorm'; 
import { CreatePercentajeqxdetDto } from './dto/create-percentajeqxdet.dto'; 
import { UpdatePercentajeqxdetDto } from './dto/update-percentajeqxdet.dto'; 
import { Percentajeqxdet } from './entities/percentajeqxdet.entity'; 

@Injectable() 
export class PercentajeqxdetsService { 
	constructor( 
		@InjectRepository(Percentajeqxdet) 
		private percentajeqxdetsRepository: Repository<Percentajeqxdet>, 
	) {} 

	async create(createPercentajeqxdetDto: CreatePercentajeqxdetDto): Promise<Percentajeqxdet> { 
		const percentajeqxdet: Percentajeqxdet = 
			this.percentajeqxdetsRepository.create(createPercentajeqxdetDto); 
		return await this.percentajeqxdetsRepository.save(percentajeqxdet); 
	} 

	findAll(): Promise<Percentajeqxdet[]> { 
		return this.percentajeqxdetsRepository.find(); 
	} 

	findOne(id: string): Promise<Percentajeqxdet> { 
		return this.percentajeqxdetsRepository.findOneBy({ id }); 
	}

	findAllByHead(id: number): Promise<Percentajeqxdet[]> { 
		return this.percentajeqxdetsRepository.findBy({
			percentajeqxId: Equal(id)
		});
	}

	async update( 
		id: string, 
		updatePercentajeqxdetDto: UpdatePercentajeqxdetDto, 
	): Promise<Percentajeqxdet> { 
		const percentajeqxdet: Percentajeqxdet = await this.percentajeqxdetsRepository.findOneBy({ 
			id, 
		}); 
		const editedPercentajeqxdet: Percentajeqxdet = Object.assign( 
			percentajeqxdet, 
			updatePercentajeqxdetDto, 
		); 
		return await this.percentajeqxdetsRepository.save(editedPercentajeqxdet); 
	} 

	async remove(id: string): Promise<Percentajeqxdet> { 
		const percentajeqxdet: Percentajeqxdet = await this.percentajeqxdetsRepository.findOneBy({ 
			id, 
		}); 
		return await this.percentajeqxdetsRepository.softRemove(percentajeqxdet); 
	} 
}