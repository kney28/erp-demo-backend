import { BaseEntity } from 'src/base/baseEntity'; 
import { Column, Entity, Unique, OneToMany } from 'typeorm'; 
import { Bed } from 'src/hospitalization/beds/entities/bed.entity';

export enum LocationStatus {
	ACTIVE = 1,
	INACTIVE = 2,
  }

@Entity('location') 
@Unique(['code']) 
export class Location extends BaseEntity { 
	@Column() 
	code: string; 

	@Column() 
	description: string; 

	@Column({ 
		type: 'enum', 
		enum: LocationStatus, 
		default: LocationStatus.ACTIVE, 
	}) 
	status: LocationStatus; 

	@OneToMany(() => Bed, (bed) => bed.location)
	beds: Bed[];

} 
