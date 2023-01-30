import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { CreateCategoriescupsDto } from './dto/create-categoriescups.dto'; 
import { UpdateCategoriescupsDto } from './dto/update-categoriescups.dto'; 
import { Categoriescups } from './entities/categoriescups.entity'; 

@Injectable() 
export class CategoriescupssService { 
	constructor( 
		@InjectRepository(Categoriescups) 
		private categoriescupssRepository: Repository<Categoriescups>, 
	) {} 

	async create(createCategoriescupsDto: CreateCategoriescupsDto): Promise<Categoriescups> { 
		const categoriescups: Categoriescups = 
			this.categoriescupssRepository.create(createCategoriescupsDto); 
		return await this.categoriescupssRepository.save(categoriescups); 
	} 

	findAll(): Promise<Categoriescups[]> { 
		return this.categoriescupssRepository.find(); 
	} 

	findOne(id: string): Promise<Categoriescups> { 
		return this.categoriescupssRepository.findOneBy({ id }); 
	} 

	async update( 
		id: string, 
		updateCategoriescupsDto: UpdateCategoriescupsDto, 
	): Promise<Categoriescups> { 
		const categoriescups: Categoriescups = await this.categoriescupssRepository.findOneBy({ 
			id, 
		}); 
		const editedCategoriescups: Categoriescups = Object.assign( 
			categoriescups, 
			updateCategoriescupsDto, 
		); 
		return await this.categoriescupssRepository.save(editedCategoriescups); 
	} 

	async remove(id: string): Promise<Categoriescups> { 
		const categoriescups: Categoriescups = await this.categoriescupssRepository.findOneBy({ 
			id, 
		}); 
		return await this.categoriescupssRepository.softRemove(categoriescups); 
	} 
}