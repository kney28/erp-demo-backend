import { BaseEntity } from 'src/base/baseEntity'; 
import { Column, Entity, Unique, ManyToOne } from 'typeorm'; 
import { Headquarters } from 'src/headquarters/entities/headquarters.entity';
import { CostCenter } from 'src/costCenter/entities/costCenter.entity';
import { AccountCatalog } from 'src/account-catalog/entities/account-catalog.entity';

export enum CareserviceStatus {
	ACTIVE = 1,
	INACTIVE = 2,
  }

export enum TypeserviceStatus {
	NINGUNA = 0,
	HOSPITALARIOS = 1,
	AMBULATORIOS = 2,
	URGENCIAS = 3,
	QUIRURGICOS = 4,
	FARMACEUTICOS = 5,
	SALADEPARTOS = 6,
	UCIADULTOS = 7,
	UCINEONATAL = 8,
	INTRAMURALES = 9,
	PROMOCIONYPREVENCION = 10,
	ADMINISTRATIVOS = 11,
  }

@Entity('care_service') 
@Unique(['code']) 
export class Careservice extends BaseEntity { 
	@Column() 
	code: string; 

	@Column() 
	description: string; 

	@Column({ 
		type: 'enum', 
		enum: TypeserviceStatus, 
		default: TypeserviceStatus.NINGUNA, 
	}) 
	typeservice: TypeserviceStatus; 

	@ManyToOne(() => Headquarters, (headquarters) => headquarters.careservices, {
		eager: true
	})
	headquarter: Headquarters; 

	@Column() 
	idpharmacy: number; 

	@ManyToOne(() => CostCenter, (costcenter) => costcenter.careservices, {
		eager: true
	})
	costcenter: CostCenter; 

	@ManyToOne(() => AccountCatalog, (accountCatalog) => accountCatalog.csincomeaccounts, {
		eager: true
	})
	incomeaccount: AccountCatalog; 

	@ManyToOne(() => AccountCatalog, (accountCatalog) => accountCatalog.csincomeaccountindividuals, {
		eager: true
	})
	incomeaccountindividuals: AccountCatalog; 

	@ManyToOne(() => AccountCatalog, (accountCatalog) => accountCatalog.cscapitationincomeaccounts, {
		eager: true
	})
	capitationincomeaccount: AccountCatalog; 

	@ManyToOne(() => AccountCatalog, (accountCatalog) => accountCatalog.cscostaccountpharmacyorders, {
		eager: true
	})
	costaccountpharmacyorders: AccountCatalog; 

	@ManyToOne(() => AccountCatalog, (accountCatalog) => accountCatalog.csdiscountaccounts, {
		eager: true
	}) 
	discountaccount: AccountCatalog; 

	@ManyToOne(() => AccountCatalog, (accountCatalog) => accountCatalog.csfeesettlementaccounts, {
		eager: true
	})  
	feesettlementaccount: AccountCatalog; 

	@ManyToOne(() => AccountCatalog, (accountCatalog) => accountCatalog.csaccountpreviousperiods, {
		eager: true
	}) 
	accountpreviousperiods: AccountCatalog; 

	@Column({ 
		type: 'enum', 
		enum: CareserviceStatus, 
		default: CareserviceStatus.ACTIVE 
	}) 
	status: CareserviceStatus; 

} 
