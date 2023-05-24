import { IsNotEmpty } from 'class-validator'; 
import { Unique } from 'typeorm'; 

export class CreateHcclassanestrecordDto { 
	@IsNotEmpty() 
	@Unique(['code']) 
	code: string; 

	@IsNotEmpty() 
	description: string; 

	//Remember add <type enum> import and add IsEnum in import class-validator 
	//@IsNotEmpty() 
	//@IsEnum(<define type enum>) 
	//typeanesthesia: <define type enum>; 

	//Remember add <type enum> import and add IsEnum in import class-validator 
	//@IsNotEmpty() 
	//@IsEnum(<define type enum>) 
	//status: <define type enum>; 

} 
