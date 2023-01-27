import { BaseEntity } from 'src/base/baseEntity'; 
import { Column, Entity, Unique, ManyToOne, OneToMany } from 'typeorm'; 
import { Healthproviders } from 'src/admissions/healthproviderss/entities/healthproviders.entity';
import { AccountCatalog } from 'src/account-catalog/entities/account-catalog.entity';
import { Careservice } from 'src/billing/careservices/entities/careservice.entity';

export enum headquartersStatus {
	ACTIVE = 1,
	INACTIVE = 2,
  }

@Entity() 
@Unique(['code']) 
export class Headquarters extends BaseEntity { 
	@Column() 
	code: string; 

	@Column() 
	description: string; 

	@Column() 
	numberingdian: number; 

	//@Column() 
	//healthprovider: number; 

	@Column() 
	activationcode: string; 

	//@Column() 
	//udacccanpreval: number; 

	@Column({ 
		type: 'enum', 
		enum: headquartersStatus, 
		default: headquartersStatus.ACTIVE, 
	}) 
	status: headquartersStatus; 

	@ManyToOne(() => Healthproviders, (healthProviders) => healthProviders.headquarters, {
		eager: true
	})
	healthprovider: Healthproviders;

	@ManyToOne(() => AccountCatalog, (accountCatalogs) => accountCatalogs.headquarterss, {
		eager: true
	})
	udacccanpreval: AccountCatalog;

	@OneToMany(() => Careservice, (careservice) => careservice.headquarter)
	careservices: Careservice[];
} 
