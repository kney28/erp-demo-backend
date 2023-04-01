import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { CreateHcvacunclassDto } from './dto/create-hcvacunclass.dto'; 
import { UpdateHcvacunclassDto } from './dto/update-hcvacunclass.dto'; 
import { Hcvacunclass } from './entities/hcvacunclass.entity'; 

@Injectable() 
export class HcvacunclasssService { 
	constructor( 
		@InjectRepository(Hcvacunclass) 
		private hcvacunclasssRepository: Repository<Hcvacunclass>, 
	) {} 

	async create(createHcvacunclassDto: CreateHcvacunclassDto): Promise<Hcvacunclass> { 
		const hcvacunclass: Hcvacunclass = 
			this.hcvacunclasssRepository.create(createHcvacunclassDto); 
		return await this.hcvacunclasssRepository.save(hcvacunclass); 
	} 

	findAll(): Promise<Hcvacunclass[]> { 
		return this.hcvacunclasssRepository.find(); 
	} 

	findOne(id: string): Promise<Hcvacunclass> { 
		return this.hcvacunclasssRepository.findOneBy({ id }); 
	} 

	async update( 
		id: string, 
		updateHcvacunclassDto: UpdateHcvacunclassDto, 
	): Promise<Hcvacunclass> { 
		const hcvacunclass: Hcvacunclass = await this.hcvacunclasssRepository.findOneBy({ 
			id, 
		}); 
		const editedHcvacunclass: Hcvacunclass = Object.assign( 
			hcvacunclass, 
			updateHcvacunclassDto, 
		); 
		return await this.hcvacunclasssRepository.save(editedHcvacunclass); 
	} 

	async remove(id: string): Promise<Hcvacunclass> { 
		const hcvacunclass: Hcvacunclass = await this.hcvacunclasssRepository.findOneBy({ 
			id, 
		}); 
		return await this.hcvacunclasssRepository.softRemove(hcvacunclass); 
	} 
}