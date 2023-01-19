import { BaseEntity } from 'src/base/baseEntity'; 
import { Column, Entity, Unique, ManyToOne } from 'typeorm';
import { Bed } from 'src/hospitalization/beds/entities/bed.entity'; 

export enum FeeStatus {
	ACTIVE = 1,
	INACTIVE = 2,
  }

@Entity('fee') 
@Unique(['code']) 
export class Fee extends BaseEntity { 
	@Column() 
	code: string; 

	@Column() 
	description: string; 

	@ManyToOne(() => Bed, (bed) => bed.fees, {
		eager: true
	}) 
	bed: Bed; 

	@Column() 
	idminattminhou: number; 

	@Column() 
	idattgreminhou: number; 

	@Column({ 
		type: 'enum', 
		enum: FeeStatus, 
		default: FeeStatus.ACTIVE, 
	}) 
	status: FeeStatus; 

} 
