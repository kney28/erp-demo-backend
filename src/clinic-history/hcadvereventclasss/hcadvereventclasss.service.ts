import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { CreateHcadvereventclassDto } from './dto/create-hcadvereventclass.dto'; 
import { UpdateHcadvereventclassDto } from './dto/update-hcadvereventclass.dto'; 
import { Hcadvereventclass } from './entities/hcadvereventclass.entity'; 

@Injectable() 
export class HcadvereventclasssService { 
	constructor( 
		@InjectRepository(Hcadvereventclass) 
		private hcadvereventclasssRepository: Repository<Hcadvereventclass>, 
	) {} 

	async create(createHcadvereventclassDto: CreateHcadvereventclassDto): Promise<Hcadvereventclass> { 
		const hcadvereventclass: Hcadvereventclass = 
			this.hcadvereventclasssRepository.create(createHcadvereventclassDto); 
		return await this.hcadvereventclasssRepository.save(hcadvereventclass); 
	} 

	findAll(): Promise<Hcadvereventclass[]> { 
		return this.hcadvereventclasssRepository.find(); 
	} 

	findOne(id: string): Promise<Hcadvereventclass> { 
		return this.hcadvereventclasssRepository.findOneBy({ id }); 
	} 

	async update( 
		id: string, 
		updateHcadvereventclassDto: UpdateHcadvereventclassDto, 
	): Promise<Hcadvereventclass> { 
		const hcadvereventclass: Hcadvereventclass = await this.hcadvereventclasssRepository.findOneBy({ 
			id, 
		}); 
		const editedHcadvereventclass: Hcadvereventclass = Object.assign( 
			hcadvereventclass, 
			updateHcadvereventclassDto, 
		); 
		return await this.hcadvereventclasssRepository.save(editedHcadvereventclass); 
	} 

	async remove(id: string): Promise<Hcadvereventclass> { 
		const hcadvereventclass: Hcadvereventclass = await this.hcadvereventclasssRepository.findOneBy({ 
			id, 
		}); 
		return await this.hcadvereventclasssRepository.softRemove(hcadvereventclass); 
	} 
}