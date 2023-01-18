import { BaseEntity } from 'src/base/baseEntity'; 
import { Column, Entity, ManyToOne } from 'typeorm'; 
import { Numerationdian } from 'src/billing/numerationdians/entities/numerationdian.entity';

export enum DetailnumerationdianStatus {
	ACTIVE = 1,
	INACTIVE = 2,
  }

export enum Billingtype {
	ENCOMPUTADOR = 1,
	MAQUINAREGISTRADORA = 2,
	ELECTRONICA = 3,
  }

@Entity('detail-numeration-dian')
export class Detailnumerationdian extends BaseEntity { 
	//@Column() 
	//code: string; 

	@ManyToOne(() => Numerationdian, (numerationdian) => numerationdian.detailnumerationdians, {
		eager: true
	})
	numerationdian: Numerationdian;

	@Column() 
	resolutiondian: string; 

	@Column({ type: 'date' }) 
	dateresolution: string; 

	@Column({ type: 'date' }) 
	initialdateresolution: string; 

	@Column({ type: 'date' }) 
	resolutionenddate: string; 

	@Column() 
	billingprefix: string; 

	@Column() 
	initialinvoice: number; 

	@Column() 
	finalbill: number; 

	@Column({ 
		type: 'enum', 
		enum: Billingtype, 
		default: Billingtype.ENCOMPUTADOR, 
	}) 
	billingtype: Billingtype; 

	@Column({ 
		type: 'enum', 
		enum: DetailnumerationdianStatus, 
		default: DetailnumerationdianStatus.ACTIVE, 
	}) 
	status: DetailnumerationdianStatus; 

} 
