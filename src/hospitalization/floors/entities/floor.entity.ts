import { BaseEntity } from 'src/base/baseEntity'; 
import { Column, Entity, Unique, OneToMany } from 'typeorm'; 
import { Bed } from 'src/hospitalization/beds/entities/bed.entity';

export enum FloorStatus {
	ACTIVE = 1,
	INACTIVE = 2,
  }

@Entity('floor') 
@Unique(['code']) 
export class Floor extends BaseEntity { 
	@Column() 
	code: string; 

	@Column() 
	description: string; 

	@Column({ 
		type: 'enum', 
		enum: FloorStatus, 
		default: FloorStatus.ACTIVE, 
	}) 
	status: FloorStatus; 

	@OneToMany(() => Bed, (bed) => bed.floor)
	beds: Bed[];

} 
