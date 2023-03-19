import { BaseEntity } from 'src/base/baseEntity'; 
import { Column, Entity, Unique, ManyToOne } from 'typeorm'; 
import { ThirdPerson } from 'src/third-person/entities/third-person.entity';
export enum Status {
	ACTIVE = 1,
	INACTIVE = 2
}

export enum Typeadmin {
	EPS = 0,
	EAS = 1,
	ARS = 2,
	ARP = 3,
	MP = 4,
	ESE = 5,
	EEPS = 6,
	IPS = 7,
	EMP = 8,
	PPN = 9,
	PPJ = 10,
	OTRAS = 11,
	EPS_S = 12
}

export enum Typeident {
	NIT = 1,
	Municipio = 2,
	Departamento = 3,
	Distrito = 4
}

@Entity() 
@Unique(['code']) 
export class Healthadministrator extends BaseEntity { 
	@Column() 
	code: string; 

	@Column() 
	description: string; 

	@Column({ 
		type: 'enum', 
		enum: Typeadmin 
	}) 
	enttypman: Typeadmin; 

	@Column({ 
		type: 'enum', 
		enum: Typeident
	}) 
	idtiype: Typeident; 

	@Column({ 
		type: 'enum', 
		enum: Status, 
		default: Status.ACTIVE, 
	}) 
	status: Status; 

	@ManyToOne(() => ThirdPerson, (thirdPerson) => thirdPerson.thirdthealthadministrator, {
		eager: true
	})
	idthird: ThirdPerson;
} 
