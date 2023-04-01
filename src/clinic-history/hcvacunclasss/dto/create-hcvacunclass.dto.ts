import { IsNotEmpty } from 'class-validator'; 
import { Unique } from 'typeorm'; 

export class CreateHcvacunclassDto { 
	@IsNotEmpty() 
	@Unique(['code']) 
	code: string; 

	@IsNotEmpty() 
	description: string; 

	@IsNotEmpty() 
	agemonths: number; 

	@IsNotEmpty() 
	ageyears: number; 

	@IsNotEmpty() 
	dose: number; 

	//Remember add <type enum> import and add IsEnum in import class-validator 
	//@IsNotEmpty() 
	//@IsEnum(<define type enum>) 
	//status: <define type enum>; 

} 
