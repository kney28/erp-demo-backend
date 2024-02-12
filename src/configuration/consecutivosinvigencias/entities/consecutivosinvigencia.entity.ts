import { BaseEntity } from 'src/base/baseEntity'; 
import { Column, Entity, Unique } from 'typeorm';

const status = {
	ACTIVE: 1,
	INACTIVE: 2,
};

@Entity() 
@Unique(['entity']) 
export class Consecutivosinvigencia extends BaseEntity { 
	// @IsNotEmpty() 
	// domine: string;

	@Column()
	entity: string

	@Column() 
	numeracionInicial: number; 

	@Column() 
	numeracionFinal: number; 

	@Column() 
	numeracionActual: number; 

	@Column({
		enum: status,
		default: status.ACTIVE
	}) 
	estado: number; 
	
} 
