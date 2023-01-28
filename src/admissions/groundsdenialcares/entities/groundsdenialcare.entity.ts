import { BaseEntity } from 'src/base/baseEntity'; 
import { Column, Entity, Unique } from 'typeorm'; 

export enum groundsdenialcareStatus {
	ACTIVE = 1,
	INACTIVE = 2,
}

@Entity() 
@Unique(['code']) 
export class Groundsdenialcare extends BaseEntity { 
	@Column() 
	code: string; 

	@Column() 
	description: string; 

	@Column({ 
		type: 'enum', 
		enum: groundsdenialcareStatus, 
		default: groundsdenialcareStatus.ACTIVE, 
	}) 
	status: groundsdenialcareStatus; 

} 
