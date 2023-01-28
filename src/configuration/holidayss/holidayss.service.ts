import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { CreateHolidaysDto } from './dto/create-holidays.dto'; 
import { UpdateHolidaysDto } from './dto/update-holidays.dto'; 
import { Holidays } from './entities/holidays.entity'; 

@Injectable() 
export class HolidayssService { 
	constructor( 
		@InjectRepository(Holidays) 
		private holidayssRepository: Repository<Holidays>, 
	) {} 

	async create(createHolidaysDto: CreateHolidaysDto): Promise<Holidays> { 
		const holidays: Holidays = 
			this.holidayssRepository.create(createHolidaysDto); 
		return await this.holidayssRepository.save(holidays); 
	} 

	findAll(): Promise<Holidays[]> { 
		return this.holidayssRepository.find(); 
	} 

	findOne(id: string): Promise<Holidays> { 
		return this.holidayssRepository.findOneBy({ id }); 
	} 

	async update( 
		id: string, 
		updateHolidaysDto: UpdateHolidaysDto, 
	): Promise<Holidays> { 
		const holidays: Holidays = await this.holidayssRepository.findOneBy({ 
			id, 
		}); 
		const editedHolidays: Holidays = Object.assign( 
			holidays, 
			updateHolidaysDto, 
		); 
		return await this.holidayssRepository.save(editedHolidays); 
	} 

	async remove(id: string): Promise<Holidays> { 
		const holidays: Holidays = await this.holidayssRepository.findOneBy({ 
			id, 
		}); 
		return await this.holidayssRepository.softRemove(holidays); 
	} 
}