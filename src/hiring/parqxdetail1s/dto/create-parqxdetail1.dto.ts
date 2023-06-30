import { IsNotEmpty, IsEnum } from 'class-validator'; 
import { Status } from 'src/base/baseEntity';
//import { Unique } from 'typeorm'; 
import { Typesurgery } from 'src/hiring/parqxdetail1s/entities/parqxdetail1.entity';

export class CreateParqxdetail1Dto { 
	//@IsNotEmpty() 
	//@Unique(['code']) 
	//code: string; 

	@IsNotEmpty() 
	parameterizationqx: number; 

	@IsNotEmpty({
		message: 'El campo Tipo de Cirugía no puede esta vacio'
	}) 
	@IsEnum(Typesurgery) 
	typesurgery: Typesurgery; 

	@IsNotEmpty() 
	numbersurgeries: number; 

	@IsNotEmpty() 
	surgeon: number; 

	@IsNotEmpty() 
	anesthesiologist: number; 

	@IsNotEmpty() 
	surgicalassistant: number; 

	@IsNotEmpty() 
	operoorig: number; 

	@IsNotEmpty() 
	meterials: number; 

	//Remember add <type enum> import and add IsEnum in import class-validator 
	@IsNotEmpty({
		message: 'El campo estado no puede estar vacio'
	}) 
	@IsEnum(Status) 
	status: Status; 

} 
