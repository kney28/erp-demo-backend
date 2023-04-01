import { BaseEntity } from 'src/base/baseEntity'; 
import { Column, Entity, Unique, OneToMany } from 'typeorm'; 
import { Patient } from 'src/admissions/patients/entities/patient.entity';

export enum Status {
	ACTIVE = 1,
	INACTIVE = 2
}

@Entity() 
@Unique(['code']) 
export class Moderatingcopay extends BaseEntity { 
	@Column() 
	code: string; 

	@Column() 
	description: string; 

	@Column({ 
		type: 'enum', 
		enum: Status, 
	}) 
	status: Status; 

	@OneToMany(() => Patient, (patient) => patient.copgovfee)
  	patients: Patient[];
} 
