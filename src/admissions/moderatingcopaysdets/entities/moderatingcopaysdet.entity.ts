import { BaseEntity } from 'src/base/baseEntity'; 
import { Column, Entity, Unique } from 'typeorm'; 

export enum Status {
	ACTIVE = 1,
	INACTIVE = 2
}

export enum Type {
	MODERATINGFEE = 1,
	COPAY = 2,
	SUBSIDIZEDREGIME = 3,
	LINKEND = 4
}

@Entity() 
export class Moderatingcopaysdet extends BaseEntity { 
	@Column() 
	moderatingcopays: number; 

	@Column({
		type: 'enum',
		enum: Type
	}) 
	type: Type; 

	@Column({
		type: 'decimal',
		scale: 2,
		precision: 11,
		nullable: true
	}) 
	percentage: number; 

	@Column({
		type: 'decimal',
		scale: 2,
		precision: 11,
		nullable: true
	}) 
	capevent: number; 

	@Column({
		type: 'decimal',
		scale: 2,
		precision: 11,
		nullable: true
	}) 
	annualcap: number; 

	@Column({ 
		type: 'enum', 
		enum: Status
	}) 
	status: Status; 

} 
