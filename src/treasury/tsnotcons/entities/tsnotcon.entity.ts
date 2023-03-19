import { BaseEntity } from 'src/base/baseEntity'; 
import { Column, Entity, Unique, ManyToOne } from 'typeorm';
import { AccountCatalog } from 'src/account-catalog/entities/account-catalog.entity';

export enum Status{
	ACTIVE = 1,
	INACTIVE = 2
}

export enum EnumSelection {
	SI = 1,
	NO = 2
}

export enum EnumNature {
	DEBIT = 1,
	CREDIT = 2
}
@Entity() 
@Unique(['code']) 
export class Tsnotcon extends BaseEntity { 
	@Column() 
	code: string; 

	@Column() 
	description: string; 

	@Column({ 
		type: 'enum', 
		enum: EnumSelection,  
	}) 
	autcoll: EnumSelection; 

	@Column({ 
		type: 'enum', 
		enum: EnumSelection, 
	}) 
	budint: EnumSelection; 

	@Column({ 
		type: 'enum', 
		enum: EnumNature, 
	}) 
	nature: EnumNature; 

	@Column({ 
		type: 'enum', 
		enum: Status, 
		default: Status.ACTIVE, 
	}) 
	statu: Status; 

	@ManyToOne(() => AccountCatalog, (accountCatalogs) => accountCatalogs.accidledacc, {
		eager: true
	})
	idledacc: AccountCatalog;
} 
