import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { CreateLocationDto } from './dto/create-location.dto'; 
import { UpdateLocationDto } from './dto/update-location.dto'; 
import { Location } from './entities/location.entity'; 

@Injectable() 
export class LocationsService { 
	constructor( 
		@InjectRepository(Location) 
		private locationsRepository: Repository<Location>, 
	) {} 

	async create(createLocationDto: CreateLocationDto): Promise<Location> { 
		const location: Location = 
			this.locationsRepository.create(createLocationDto); 
		return await this.locationsRepository.save(location); 
	} 

	findAll(): Promise<Location[]> { 
		return this.locationsRepository.find(); 
	} 

	findOne(id: string): Promise<Location> { 
		return this.locationsRepository.findOneBy({ id }); 
	} 

	async update( 
		id: string, 
		updateLocationDto: UpdateLocationDto, 
	): Promise<Location> { 
		const location: Location = await this.locationsRepository.findOneBy({ 
			id, 
		}); 
		const editedLocation: Location = Object.assign( 
			location, 
			updateLocationDto, 
		); 
		return await this.locationsRepository.save(editedLocation); 
	} 

	async remove(id: string): Promise<Location> { 
		const location: Location = await this.locationsRepository.findOneBy({ 
			id, 
		}); 
		return await this.locationsRepository.softRemove(location); 
	} 
}