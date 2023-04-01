import { BaseEntity } from 'src/base/baseEntity'; 
import { Column, Entity} from 'typeorm'; 
import { Status } from 'src/base/baseEntity';

export enum Typepercentaje {
	NINGUNO = 1,
	CIRUJANO_GINECOBSTETRA = 2,
	ANESTESIOLOGO = 3,
	AYUDANTIA_QUIRURGICA = 4,
	DERECHOS_SALA = 5,
	MATERIALES = 6
}

@Entity() 
export class Percentajeqxdet extends BaseEntity { 
	@Column() 
	percentajeqxId: number; 

	@Column({
		type: 'enum',
		enum: Typepercentaje
	}) 
	typepercentaje: Typepercentaje; 

	@Column({
		type: 'decimal',
	}) 
	valpercentaje: number; 

	@Column({
		type: 'enum',
		enum: Status
	}) 
	status: Status;
} 
