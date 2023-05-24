import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { CreateHcallerclassDto } from './dto/create-hcallerclass.dto'; 
import { UpdateHcallerclassDto } from './dto/update-hcallerclass.dto'; 
import { Hcallerclass } from './entities/hcallerclass.entity'; 

@Injectable() 
export class HcallerclasssService { 
	constructor( 
		@InjectRepository(Hcallerclass) 
		private hcallerclasssRepository: Repository<Hcallerclass>, 
	) {} 

	async create(createHcallerclassDto: CreateHcallerclassDto): Promise<Hcallerclass> { 
		const hcallerclass: Hcallerclass = 
			this.hcallerclasssRepository.create(createHcallerclassDto); 
		return await this.hcallerclasssRepository.save(hcallerclass); 
	} 

	findAll(): Promise<Hcallerclass[]> { 
		return this.hcallerclasssRepository.find(); 
	} 

	findOne(id: string): Promise<Hcallerclass> { 
		return this.hcallerclasssRepository.findOneBy({ id }); 
	} 

	async update( 
		id: string, 
		updateHcallerclassDto: UpdateHcallerclassDto, 
	): Promise<Hcallerclass> { 
		const hcallerclass: Hcallerclass = await this.hcallerclasssRepository.findOneBy({ 
			id, 
		}); 
		const editedHcallerclass: Hcallerclass = Object.assign( 
			hcallerclass, 
			updateHcallerclassDto, 
		); 
		return await this.hcallerclasssRepository.save(editedHcallerclass); 
	} 

	async remove(id: string): Promise<Hcallerclass> { 
		const hcallerclass: Hcallerclass = await this.hcallerclasssRepository.findOneBy({ 
			id, 
		}); 
		return await this.hcallerclasssRepository.softRemove(hcallerclass); 
	} 
}