import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { CreateChargeDto } from './dto/create-charge.dto'; 
import { UpdateChargeDto } from './dto/update-charge.dto'; 
import { Charge } from './entities/charge.entity'; 

@Injectable() 
export class ChargesService { 
	constructor( 
		@InjectRepository(Charge) 
		private chargesRepository: Repository<Charge>, 
	) {} 

	async create(createChargeDto: CreateChargeDto): Promise<Charge> { 
		const charge: Charge = 
			this.chargesRepository.create(createChargeDto); 
		return await this.chargesRepository.save(charge); 
	} 

	findAll(): Promise<Charge[]> { 
		return this.chargesRepository.find(); 
	} 

	findOne(id: string): Promise<Charge> { 
		return this.chargesRepository.findOneBy({ id }); 
	} 

	async update( 
		id: string, 
		updateChargeDto: UpdateChargeDto, 
	): Promise<Charge> { 
		const charge: Charge = await this.chargesRepository.findOneBy({ 
			id, 
		}); 
		const editedCharge: Charge = Object.assign( 
			charge, 
			updateChargeDto, 
		); 
		return await this.chargesRepository.save(editedCharge); 
	} 

	async remove(id: string): Promise<Charge> { 
		const charge: Charge = await this.chargesRepository.findOneBy({ 
			id, 
		}); 
		return await this.chargesRepository.softRemove(charge); 
	} 
}