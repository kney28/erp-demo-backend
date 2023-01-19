import { BaseEntity } from 'src/base/baseEntity'; 
import { Column, Entity, Unique, ManyToOne, OneToMany } from 'typeorm'; 
import { Floor } from 'src/hospitalization/floors/entities/floor.entity';
import { Location } from 'src/hospitalization/locations/entities/location.entity';
import { Careservice } from 'src/billing/careservices/entities/careservice.entity';
import { Fee } from 'src/hospitalization/fees/entities/fee.entity';

export enum BedStatus {
	NINGUNO = 0,
	DESOCUPADA = 1,
	OCUPADA = 2,
	BLOQUEADA = 3,
	MANTENIMIENTO = 4,
	INACTIVA = 5,
  }

export enum TypeBed {
	NINGUNO = 0,
	UNIPERSONAL = 1,
	BIPERSONAL = 2,
	TRESCAMAS = 3,
	CUATROCAMAS = 4,
  }

@Entity('bed') 
@Unique(['code']) 
export class Bed extends BaseEntity { 
	@Column() 
	code: string; 

	@Column() 
	description: string; 

	@ManyToOne(() => Floor, (floor) => floor.beds, {
		eager: true
	}) 
	floor: Floor; 

	@ManyToOne(() => Location, (location) => location.beds, {
		eager: true
	}) 
	location: Location; 

	@Column({ 
		type: 'enum', 
		enum: TypeBed, 
		default: TypeBed.NINGUNO, 
	}) 
	typebed: TypeBed; 

	@ManyToOne(() => Careservice, (careservice) => careservice.beds, {
		eager: true
	}) 
	careservice: Careservice; 

	@Column({ 
		type: 'enum', 
		enum: BedStatus, 
		default: BedStatus.NINGUNO, 
	}) 
	status: BedStatus; 

	@OneToMany(() => Fee, (fee) => fee.bed)
	fees: Fee[];

} 
