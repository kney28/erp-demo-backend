import { BaseEntity } from 'src/base/baseEntity'; 
import { Column, Entity, Unique, OneToMany } from 'typeorm';
import { Detailnumerationdian } from 'src/billing/detailnumerationdians/entities/detailnumerationdian.entity';

export enum NumerationdianStatus {
	ACTIVE = 1,
	INACTIVE = 2,
  }

@Entity('numeration_dian') 
@Unique(['code']) 
export class Numerationdian extends BaseEntity { 
	@Column() 
	code: string; 

	@Column() 
	description: string; 

	@Column({ 
		type: 'enum', 
		enum: NumerationdianStatus, 
		default: NumerationdianStatus.ACTIVE, 
	}) 
	status: NumerationdianStatus; 

	@OneToMany(() => Detailnumerationdian, (detailnumerationdian) => detailnumerationdian.numerationdian)
	detailnumerationdians: Detailnumerationdian[];

} 
