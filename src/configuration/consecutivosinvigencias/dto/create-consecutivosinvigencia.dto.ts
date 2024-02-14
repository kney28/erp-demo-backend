import { IsNotEmpty } from 'class-validator'; 
import { Unique } from 'typeorm'; 

export class CreateConsecutivosinvigenciaDto { 
	@IsNotEmpty() 
	numeracionInicial: number; 

	@IsNotEmpty() 
	numeracionFinal: number; 

	@IsNotEmpty() 
	numeracionActual: number; 

	@IsNotEmpty() 
	estado: number;

	// @IsNotEmpty() 
	// domine: string;

	@IsNotEmpty() 
	entity: string;
} 
