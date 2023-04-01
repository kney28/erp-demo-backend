import { BaseEntity } from 'src/base/baseEntity';
import { Status } from 'src/base/baseEntity';
import { Column, Entity, Unique } from 'typeorm';

export enum Groupqx {
	GRUPO_02 = 1,
	GRUPO_03 = 2,
	GRUPO_04 = 3,
	GRUPO_05 = 4,
	GRUPO_06 = 5,
	GRUPO_07 = 6,
	GRUPO_08 = 7,
	GRUPO_09 = 8,
	GRUPO_10 = 9,
	GRUPO_11 = 10,
	GRUPO_12 = 11,
	GRUPO_13 = 12,
	GRUPO_ESPECIAL_20 = 13,
	GRUPO_ESPECIAL_21 = 14,
	GRUPO_ESPECIAL_22 = 15,
	GRUPO_ESPECIAL_23 = 16
}
@Entity() 
@Unique(['code']) 
export class Percentageqx extends BaseEntity { 
	@Column() 
	code: string; 

	@Column() 
	description: string; 

	@Column({ 
		type: 'enum', 
		enum: Groupqx
	}) 
	groupqx: Groupqx; 

	@Column({ 
		type: 'enum', 
		enum: Status,
	}) 
	status: Status;
} 
