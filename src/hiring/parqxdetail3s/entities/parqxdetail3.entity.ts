import { BaseEntity } from 'src/base/baseEntity'; 
import { Status } from 'src/base/baseEntity'; 
import { Column, Entity, ManyToOne } from 'typeorm'; 
import { Healthservice } from 'src/hiring/healthservices/entities/healthservice.entity';

export enum Roomrighttypes  {
	NINGUNA= 0,
	ENDOSCOPIA = 1,
	ESPECIALISTA= 2,
	OTRAS_SALAS  = 3,
	SALA_PARA_SOAT= 4
}

@Entity() 
//@Unique(['code']) 
export class Parqxdetail3 extends BaseEntity { 
	//@Column() 
	//code: string; 

	@Column() 
	parameterizationqx: number; 

	@Column({
		type: 'decimal',
		precision: 20,
		scale: 2
	}) 
	assistantvalue: number; 

	@Column({
		type: 'decimal',
		precision: 20,
		scale: 2
	}) 
	roomrightvalue: number; 

	@Column({ 
		type: 'enum', 
		enum: Roomrighttypes
	}) 
	roomrighttypes: Roomrighttypes; 

	@Column({
		type: 'decimal',
		precision: 20,
		scale: 2
	}) 
	uvrinitialrango: number; 

	@Column({
		type: 'decimal',
		precision: 20,
		scale: 2
	}) 
	uvrfinalrango: number; 

	@Column({ 
		type: 'enum', 
		enum: Status
	}) 
	status: Status; 

	@ManyToOne(() => Healthservice, (healthservice) => healthservice.parqxdetail3, {
		eager: true
	})
	healthservice: Healthservice;

} 
