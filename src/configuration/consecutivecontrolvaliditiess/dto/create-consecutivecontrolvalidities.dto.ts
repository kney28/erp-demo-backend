import { IsNotEmpty } from 'class-validator'; 
//import { Unique } from 'typeorm'; 

export class CreateConsecutivecontrolvaliditiesDto { 
	//@IsNotEmpty() 
	//@Unique(['code']) 
	//code: string; 

	//@IsNotEmpty() 
	//validiti: number; 

	//Remember add <type enum> import and add IsEnum in import class-validator 
	//@IsNotEmpty() 
	//@IsEnum(<define type enum>) 
	//process: <define type enum>; 

	//Remember add <type enum> import and add IsEnum in import class-validator 
	//@IsNotEmpty() 
	//@IsEnum(<define type enum>) 
	//option: <define type enum>; 

	@IsNotEmpty() 
	number: number; 

	//Remember add <type enum> import and add IsEnum in import class-validator 
	//@IsNotEmpty() 
	//@IsEnum(<define type enum>) 
	//status: <define type enum>; 

} 
