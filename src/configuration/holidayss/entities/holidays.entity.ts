import { BaseEntity } from 'src/base/baseEntity'; 
import { Column, Entity, Unique } from 'typeorm'; 

export enum HolidaysStatus {
	ACTIVE = 1,
	INACTIVE = 2,
  }

@Entity() 
@Unique(['code']) 
export class Holidays extends BaseEntity { 
	@Column() 
	code: string; 

	@Column({type: 'date'}) 
	day: Date; 

	@Column() 
	description: string; 

	@Column({ 
		type: 'enum', 
		enum: HolidaysStatus, 
		default: HolidaysStatus.ACTIVE, 
	}) 
	status: HolidaysStatus; 

} 
