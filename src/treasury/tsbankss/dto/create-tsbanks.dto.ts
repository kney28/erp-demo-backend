import { IsEmpty, IsNotEmpty } from 'class-validator'; 
import { IsNull, Unique } from 'typeorm'; 

export class CreateTsbanksDto { 
	@IsNotEmpty() 
	@Unique(['code']) 
	code: string; 

	@IsNotEmpty() 
	description: string; 

	//@IsEmpty()
	//codeach: string; 

	//Remember add <type enum> import and add IsEnum in import class-validator 
	//@IsNotEmpty() 
	//@IsEnum(<define type enum>) 
	//status: <define type enum>; 

} 
