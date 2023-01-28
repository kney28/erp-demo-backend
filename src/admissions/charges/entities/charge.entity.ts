import { BaseEntity } from 'src/base/baseEntity'; 
import { Column, Entity, Unique } from 'typeorm'; 

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

} 
