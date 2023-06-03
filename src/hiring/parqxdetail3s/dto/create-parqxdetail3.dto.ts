import { IsNotEmpty, IsEnum } from 'class-validator'; 
import { Status } from 'src/base/baseEntity'; 
//import { Unique } from 'typeorm'; 

export class CreateParqxdetail3Dto { 
	//@IsNotEmpty() 
	//@Unique(['code']) 
	//code: string; 

	@IsNotEmpty() 
	parameterizationqx: number; 

	@IsNotEmpty() 
	assistantvalue: number; 

	@IsNotEmpty() 
	roomrightvalue: number; 

	@IsNotEmpty() 
	uvrinitialrango: number;  

	@IsNotEmpty({
		message: 'El campo estado no puede estar vacio'
	}) 
	@IsEnum(Status) 
	status: Status; 

} 
