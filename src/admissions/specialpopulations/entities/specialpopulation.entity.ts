import { BaseEntity } from 'src/base/baseEntity'; 
import { Column, Entity, Unique } from 'typeorm'; 

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

} 
