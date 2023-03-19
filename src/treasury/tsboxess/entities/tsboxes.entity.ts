import { BaseEntity } from 'src/base/baseEntity'; 
import { Column, Entity, Unique, ManyToOne } from 'typeorm'; 
import { AccountCatalog } from 'src/account-catalog/entities/account-catalog.entity';
import { Acccostcenters } from 'src/accounting/acccostcenterss/entities/acccostcenters.entity';

export enum MinorMajor {
	MAJOR = 1,
	MINOR = 2
}

export enum Status {
	ACTIVE = 1,
	INACTIVE = 2
}

@Entity() 
@Unique(['code']) 
export class Tsboxes extends BaseEntity { 
	@Column() 
	code: string; 

	@Column() 
	description: string; 

	@Column({ 
		type: 'enum', 
		enum: MinorMajor
	}) 
	tipbox: MinorMajor; 

	@Column() 
	opecasbal: number; 

	@Column({
		type: 'date'
	}) 
	datstabox: Date; 

	@Column() 
	maxamo: number; 

	@Column() 
	minamo: number; 

	@Column() 
	avaval: number; 

	@Column({ 
		type: 'enum', 
		enum: Status, 
		default: Status.ACTIVE, 
	}) 
	status: Status; 

	@ManyToOne(() => AccountCatalog, (accountCatalogs) => accountCatalogs.acctsboxes, {
		eager: true
	})
	idledacc: AccountCatalog;

	@ManyToOne(() => Acccostcenters, (acccostcenterss) => acccostcenterss.costtsboxes, {
		eager: true
	})
	idcoscen: Acccostcenters;
} 
