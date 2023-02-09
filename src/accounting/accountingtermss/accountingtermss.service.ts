import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { CreateAccountingtermsDto } from './dto/create-accountingterms.dto'; 
import { UpdateAccountingtermsDto } from './dto/update-accountingterms.dto'; 
import { Accountingterms } from './entities/accountingterms.entity'; 

@Injectable() 
export class AccountingtermssService { 
	constructor( 
		@InjectRepository(Accountingterms) 
		private accountingtermssRepository: Repository<Accountingterms>, 
	) {} 

	async create(createAccountingtermsDto: CreateAccountingtermsDto): Promise<Accountingterms> { 
		const accountingterms: Accountingterms = 
			this.accountingtermssRepository.create(createAccountingtermsDto); 
		return await this.accountingtermssRepository.save(accountingterms); 
	} 

	findAll(): Promise<Accountingterms[]> { 
		return this.accountingtermssRepository.find(); 
	} 

	findOne(id: string): Promise<Accountingterms> { 
		return this.accountingtermssRepository.findOneBy({ id }); 
	} 

	async update( 
		id: string, 
		updateAccountingtermsDto: UpdateAccountingtermsDto, 
	): Promise<Accountingterms> { 
		const accountingterms: Accountingterms = await this.accountingtermssRepository.findOneBy({ 
			id, 
		}); 
		const editedAccountingterms: Accountingterms = Object.assign( 
			accountingterms, 
			updateAccountingtermsDto, 
		); 
		return await this.accountingtermssRepository.save(editedAccountingterms); 
	} 

	async remove(id: string): Promise<Accountingterms> { 
		const accountingterms: Accountingterms = await this.accountingtermssRepository.findOneBy({ 
			id, 
		}); 
		return await this.accountingtermssRepository.softRemove(accountingterms); 
	} 
}