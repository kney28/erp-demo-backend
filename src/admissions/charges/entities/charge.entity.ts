import { BaseEntity } from 'src/base/baseEntity'; 
import { Column, Entity, Unique, OneToMany } from 'typeorm'; 
import { Patient } from 'src/admissions/patients/entities/patient.entity';

export enum chargeStatus {
	ACTIVE = 1,
	INACTIVE = 2,
} 

@Entity() 
@Unique(['code']) 
export class Charge extends BaseEntity { 
	@Column() 
	code: string; 

	@Column() 
	description: string; 

	@Column({ 
		type: 'enum', 
		enum: chargeStatus, 
		default: chargeStatus.ACTIVE, 
	}) 
	status: chargeStatus; 

	@OneToMany(() => Patient, (patient) => patient.charge)
  	patients: Patient[];
} 
