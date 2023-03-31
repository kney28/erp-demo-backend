import { IsNotEmpty } from 'class-validator'; 
import { Unique } from 'typeorm'; 

export class CreatePretypexpDto { 
	@IsNotEmpty() 
	@Unique(['code']) 
	code: string; 

	@IsNotEmpty() 
	idbudval: number; 

	@IsNotEmpty() 
	description: string; 

	//Remember add <type enum> import and add IsEnum in import class-validator 
	//@IsNotEmpty() 
	//@IsEnum(<define type enum>) 
	//expcla: <define type enum>; 

	//Remember add <type enum> import and add IsEnum in import class-validator 
	//@IsNotEmpty() 
	//@IsEnum(<define type enum>) 
	//status: <define type enum>; 

} 
