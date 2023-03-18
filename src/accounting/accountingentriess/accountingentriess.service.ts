import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { CreateAccountingentriesDto } from './dto/create-accountingentries.dto'; 
import { UpdateAccountingentriesDto } from './dto/update-accountingentries.dto'; 
import { Accountingentries } from './entities/accountingentries.entity'; 

@Injectable() 
export class AccountingentriessService { 
	constructor( 
		@InjectRepository(Accountingentries) 
		private accountingentriessRepository: Repository<Accountingentries>, 
	) {} 

	async create(createAccountingentriesDto: CreateAccountingentriesDto): Promise<Accountingentries> { 
		const accountingentries: Accountingentries = 
			this.accountingentriessRepository.create(createAccountingentriesDto); 
		return await this.accountingentriessRepository.save(accountingentries); 
	} 

	findAll(): Promise<Accountingentries[]> { 
		return this.accountingentriessRepository.find(); 
	} 

	findOne(id: string): Promise<Accountingentries> { 
		return this.accountingentriessRepository.findOneBy({ id }); 
	} 

	async update( 
		id: string, 
		updateAccountingentriesDto: UpdateAccountingentriesDto, 
	): Promise<Accountingentries> { 
		const accountingentries: Accountingentries = await this.accountingentriessRepository.findOneBy({ 
			id, 
		}); 
		const editedAccountingentries: Accountingentries = Object.assign( 
			accountingentries, 
			updateAccountingentriesDto, 
		); 
		return await this.accountingentriessRepository.save(editedAccountingentries); 
	} 

	async remove(id: string): Promise<Accountingentries> { 
		const accountingentries: Accountingentries = await this.accountingentriessRepository.findOneBy({ 
			id, 
		}); 
		return await this.accountingentriessRepository.softRemove(accountingentries); 
	} 
}