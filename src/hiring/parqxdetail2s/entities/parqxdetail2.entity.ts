import { BaseEntity } from 'src/base/baseEntity'; 
import { Status } from 'src/base/baseEntity'; 
import { Column, Entity, Unique, ManyToOne } from 'typeorm'; 
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
export class Parqxdetail2 extends BaseEntity { 
	//@Column() 
	//code: string; 

	@Column() 
	parameterizationqx: number; 

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
	roompercentage: number; 

	@Column({
		type: 'decimal',
		precision: 20,
		scale: 2
	}) 
	materialvalue: number; 

	@Column({ 
		type: 'enum', 
		enum: Status
	}) 
	status: Status; 

	@ManyToOne(() => Healthservice, (healthservice) => healthservice.parqxdetail2, {
		eager: true
	})
	healthservice: Healthservice;
} 
