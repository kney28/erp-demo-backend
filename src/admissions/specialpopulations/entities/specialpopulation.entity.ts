import { BaseEntity } from 'src/base/baseEntity'; 
import { Column, Entity, Unique, OneToMany } from 'typeorm'; 
import { Patient } from 'src/admissions/patients/entities/patient.entity';

export enum SpecialPopulationStatus {
	ACTIVE = 1,
	INACTIVE = 2,
}

@Entity() 
@Unique(['code']) 
export class Specialpopulation extends BaseEntity { 
	@Column() 
	code: string; 

	@Column() 
	description: string; 

	@Column({ 
		type: 'enum', 
		enum: SpecialPopulationStatus, 
		default: SpecialPopulationStatus.ACTIVE, 
	}) 
	status: SpecialPopulationStatus; 

	@OneToMany(() => Patient, (patient) => patient.specialpopulation)
	patients: Patient[];
} 
