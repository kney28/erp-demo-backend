import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { CreatePretypincDto } from './dto/create-pretypinc.dto'; 
import { UpdatePretypincDto } from './dto/update-pretypinc.dto'; 
import { Pretypinc } from './entities/pretypinc.entity'; 

@Injectable() 
export class PretypincsService { 
	constructor( 
		@InjectRepository(Pretypinc) 
		private pretypincsRepository: Repository<Pretypinc>, 
	) {} 

	async create(createPretypincDto: CreatePretypincDto): Promise<Pretypinc> { 
		const pretypinc: Pretypinc = 
			this.pretypincsRepository.create(createPretypincDto); 
		return await this.pretypincsRepository.save(pretypinc); 
	} 

	findAll(): Promise<Pretypinc[]> { 
		return this.pretypincsRepository.find(); 
	} 

	findOne(id: string): Promise<Pretypinc> { 
		return this.pretypincsRepository.findOneBy({ id }); 
	} 

	async update( 
		id: string, 
		updatePretypincDto: UpdatePretypincDto, 
	): Promise<Pretypinc> { 
		const pretypinc: Pretypinc = await this.pretypincsRepository.findOneBy({ 
			id, 
		}); 
		const editedPretypinc: Pretypinc = Object.assign( 
			pretypinc, 
			updatePretypincDto, 
		); 
		return await this.pretypincsRepository.save(editedPretypinc); 
	} 

	async remove(id: string): Promise<Pretypinc> { 
		const pretypinc: Pretypinc = await this.pretypincsRepository.findOneBy({ 
			id, 
		}); 
		return await this.pretypincsRepository.softRemove(pretypinc); 
	} 
}