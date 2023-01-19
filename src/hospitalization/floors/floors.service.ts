import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { CreateFloorDto } from './dto/create-floor.dto'; 
import { UpdateFloorDto } from './dto/update-floor.dto'; 
import { Floor } from './entities/floor.entity'; 

@Injectable() 
export class FloorsService { 
	constructor( 
		@InjectRepository(Floor) 
		private floorsRepository: Repository<Floor>, 
	) {} 

	async create(createFloorDto: CreateFloorDto): Promise<Floor> { 
		const floor: Floor = 
			this.floorsRepository.create(createFloorDto); 
		return await this.floorsRepository.save(floor); 
	} 

	findAll(): Promise<Floor[]> { 
		return this.floorsRepository.find(); 
	} 

	findOne(id: string): Promise<Floor> { 
		return this.floorsRepository.findOneBy({ id }); 
	} 

	async update( 
		id: string, 
		updateFloorDto: UpdateFloorDto, 
	): Promise<Floor> { 
		const floor: Floor = await this.floorsRepository.findOneBy({ 
			id, 
		}); 
		const editedFloor: Floor = Object.assign( 
			floor, 
			updateFloorDto, 
		); 
		return await this.floorsRepository.save(editedFloor); 
	} 

	async remove(id: string): Promise<Floor> { 
		const floor: Floor = await this.floorsRepository.findOneBy({ 
			id, 
		}); 
		return await this.floorsRepository.softRemove(floor); 
	} 
}