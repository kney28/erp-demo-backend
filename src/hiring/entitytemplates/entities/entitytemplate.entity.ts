import { BaseEntity } from 'src/base/baseEntity'; 
import { Column, Entity, Unique } from 'typeorm'; 

export enum EntitytemplateStatus {
	ACTIVE = 1,
	INACTIVE = 2,
}

@Entity() 
@Unique(['code']) 
export class Entitytemplate extends BaseEntity { 
	@Column() 
	code: string; 

	@Column() 
	description: string; 

	@Column({ 
		type: 'enum', 
		enum: EntitytemplateStatus, 
		default: EntitytemplateStatus.ACTIVE, 
	}) 
	status: EntitytemplateStatus; 

} 
