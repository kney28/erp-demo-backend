import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { CreateHcspecialtiesDto } from './dto/create-hcspecialties.dto'; 
import { UpdateHcspecialtiesDto } from './dto/update-hcspecialties.dto'; 
import { Hcspecialties } from './entities/hcspecialties.entity'; 

@Injectable() 
export class HcspecialtiessService { 
	constructor( 
		@InjectRepository(Hcspecialties) 
		private hcspecialtiessRepository: Repository<Hcspecialties>, 
	) {} 

	async create(createHcspecialtiesDto: CreateHcspecialtiesDto): Promise<Hcspecialties> { 
		const hcspecialties: Hcspecialties = 
			this.hcspecialtiessRepository.create(createHcspecialtiesDto); 
		return await this.hcspecialtiessRepository.save(hcspecialties); 
	} 

	findAll(): Promise<Hcspecialties[]> { 
		return this.hcspecialtiessRepository.find(); 
	} 

	findOne(id: string): Promise<Hcspecialties> { 
		return this.hcspecialtiessRepository.findOneBy({ id }); 
	} 

	async update( 
		id: string, 
		updateHcspecialtiesDto: UpdateHcspecialtiesDto, 
	): Promise<Hcspecialties> { 
		const hcspecialties: Hcspecialties = await this.hcspecialtiessRepository.findOneBy({ 
			id, 
		}); 
		const editedHcspecialties: Hcspecialties = Object.assign( 
			hcspecialties, 
			updateHcspecialtiesDto, 
		); 
		return await this.hcspecialtiessRepository.save(editedHcspecialties); 
	} 

	async remove(id: string): Promise<Hcspecialties> { 
		const hcspecialties: Hcspecialties = await this.hcspecialtiessRepository.findOneBy({ 
			id, 
		}); 
		return await this.hcspecialtiessRepository.softRemove(hcspecialties); 
	} 
}