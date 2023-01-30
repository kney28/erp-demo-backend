import { BaseEntity } from 'src/base/baseEntity'; 
import { Column, Entity, Unique, OneToMany } from 'typeorm'; 
import { Status } from 'src/base/baseEntity';
import { Parameterizationcups } from 'src/hiring/parameterizationcupss/entities/parameterizationcups.entity';

@Entity() 
@Unique(['code']) 
export class Subcatcups extends BaseEntity { 
	@Column() 
	code: string; 

	@Column() 
	description: string; 
  
	@Column({ 
		type: 'enum', 
		enum: Status, 
		default: Status.ACTIVE, 
	}) 
	status: Status;

	@OneToMany(() => Parameterizationcups, (parameterizationCups) => parameterizationCups.subcategory)
	parameterizationCups: Parameterizationcups[];
} 
