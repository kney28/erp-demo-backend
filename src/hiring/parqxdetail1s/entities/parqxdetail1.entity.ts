import { BaseEntity } from 'src/base/baseEntity'; 
import { Status } from 'src/base/baseEntity'; 
import { Column, Entity, Unique } from 'typeorm'; 

export enum Typesurgery {
	NINGUNO = 0,
	BILATERAL = 1,
	MISMO_ESPECIALISTA_MISMA_VIA  = 2,
	MISMO_ESPECIALISTA_DIFERENTE_VIA = 3,
	DIFERENTE_ESPECIALISTA_POR_DIFERENTE_VIA = 4,
	DIFERENTE_ESPECIALISTA_POR_MISMA_VIA = 5,
	BILATERAL_MULTIPLE = 6,
	POLITRAUMA_MISMA_VIA = 7,
	POLITRAUMA_DIFERENTE_VÍA = 8,
	BASICO = 9,
	NO_CRUENTO = 10
}

@Entity() 
//@Unique(['code']) 
export class Parqxdetail1 extends BaseEntity { 
	//@Column() 
	//code: string; 

	@Column() 
	parameterizationqx: number; 

	@Column({ 
		type: 'enum', 
		enum: Typesurgery
	}) 
	typesurgery: Typesurgery; 

	@Column() 
	numbersurgeries: number; 

	@Column({
		type: 'decimal',
		precision: 20,
		scale: 2
	}) 
	surgeon: number; 

	@Column({
		type: 'decimal',
		precision: 20,
		scale: 2
	}) 
	anesthesiologist: number; 

	@Column({
		type: 'decimal',
		precision: 20,
		scale: 2
	}) 
	surgicalassistant: number; 

	@Column({
		type: 'decimal',
		precision: 20,
		scale: 2
	}) 
	operoorig: number; 

	@Column({
		type: 'decimal',
		precision: 20,
		scale: 2
	}) 
	meterials: number; 

	@Column({ 
		type: 'enum', 
		enum: Status 
	}) 
	status: Status; 

} 
