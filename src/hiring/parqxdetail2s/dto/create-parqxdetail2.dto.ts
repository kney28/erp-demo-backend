import { IsNotEmpty, IsEnum } from 'class-validator'; 
import { Status } from 'src/base/baseEntity'; 
import { Roomrighttypes } from 'src/hiring/parqxdetail2s/entities/parqxdetail2.entity';
//import { Unique } from 'typeorm'; 

export class CreateParqxdetail2Dto { 
	//@IsNotEmpty() 
	//@Unique(['code']) 
	//code: string; 

	@IsNotEmpty() 
	parameterizationqx: number; 

	@IsNotEmpty({
		message: 'El campo tipo de sala no puede estar vacio'
	}) 
	@IsEnum(Roomrighttypes) 
	roomrighttypes: Roomrighttypes; 

	@IsNotEmpty() 
	roompercentage: number; 

	@IsNotEmpty() 
	materialvalue: number; 

	@IsNotEmpty({
		message: 'El campo estado no puede estar vacio'
	}) 
	@IsEnum(Status) 
	status: Status; 

} 
