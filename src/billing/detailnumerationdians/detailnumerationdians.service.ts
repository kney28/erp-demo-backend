import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Equal, Repository } from 'typeorm'; 
import { CreateDetailnumerationdianDto } from './dto/create-detailnumerationdian.dto'; 
import { UpdateDetailnumerationdianDto } from './dto/update-detailnumerationdian.dto'; 
import { Detailnumerationdian } from './entities/detailnumerationdian.entity'; 

@Injectable() 
export class DetailnumerationdiansService { 
	constructor( 
		@InjectRepository(Detailnumerationdian) 
		private detailnumerationdiansRepository: Repository<Detailnumerationdian>, 
	) {} 

	async create(createDetailnumerationdianDto: CreateDetailnumerationdianDto): Promise<Detailnumerationdian> { 
		const detailnumerationdian: Detailnumerationdian = 
			this.detailnumerationdiansRepository.create(createDetailnumerationdianDto); 
		return await this.detailnumerationdiansRepository.save(detailnumerationdian); 
	} 

	findAll(): Promise<Detailnumerationdian[]> { 
		return this.detailnumerationdiansRepository.find(); 
	}

	findAllByHead(id: string): Promise<Detailnumerationdian[]> { 
		return this.detailnumerationdiansRepository.findBy({
			numerationdian: Equal(id)
		});
	} 

	findOne(id: string): Promise<Detailnumerationdian> { 
		return this.detailnumerationdiansRepository.findOneBy({ id }); 
	} 

	async update( 
		id: string, 
		updateDetailnumerationdianDto: UpdateDetailnumerationdianDto, 
	): Promise<Detailnumerationdian> {
		const detailnumerationdian: Detailnumerationdian = await this.detailnumerationdiansRepository.findOneBy({ 
			id, 
		});
		const editedDetailnumerationdian: Detailnumerationdian = Object.assign( 
			detailnumerationdian, 
			updateDetailnumerationdianDto, 
		); 
		return await this.detailnumerationdiansRepository.save(editedDetailnumerationdian); 
	} 

	async remove(id: string): Promise<Detailnumerationdian> { 
		const detailnumerationdian: Detailnumerationdian = await this.detailnumerationdiansRepository.findOneBy({ 
			id, 
		}); 
		return await this.detailnumerationdiansRepository.softRemove(detailnumerationdian); 
	} 
}