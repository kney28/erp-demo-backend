import { IsNotEmpty } from 'class-validator'; 
import { Unique } from 'typeorm'; 

export class CreateTsboxesDto { 
	@IsNotEmpty() 
	@Unique(['code']) 
	code: string; 

	@IsNotEmpty() 
	description: string; 

	//Remember add <type enum> import and add IsEnum in import class-validator 
	//@IsNotEmpty() 
	//@IsEnum(<define type enum>) 
	//tipbox: <define type enum>; 

	@IsNotEmpty() 
	opecasbal: number; 

	@IsNotEmpty() 
	datstabox: Date; 

	@IsNotEmpty() 
	maxamo: number; 

	@IsNotEmpty() 
	minamo: number; 

	@IsNotEmpty() 
	avaval: number; 

	//Remember add <type enum> import and add IsEnum in import class-validator 
	//@IsNotEmpty() 
	//@IsEnum(<define type enum>) 
	//status: <define type enum>; 

} 
