import { BaseEntity } from 'src/base/baseEntity'; 
import { Column, Entity, Unique } from 'typeorm'; 

export enum Status {
	ACTIVE = 1,
	INACTIVE = 2
}

@Entity() 
@Unique(['code']) 
export class Requirementslistdet extends BaseEntity { 
	@Column() 
	code: string; 

	@Column() 
	listrequirements: number; 

	@Column() 
	description: string; 

	@Column() 
	procedure: string; 

	@Column({ 
		type: 'enum', 
		enum: Status, 
	}) 
	status: Status; 

}
