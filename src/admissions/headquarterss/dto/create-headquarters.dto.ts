import { IsNotEmpty } from 'class-validator'; 
import { Unique } from 'typeorm'; 

export class CreateHeadquartersDto { 
	@IsNotEmpty() 
	@Unique(['code']) 
	code: string; 

	@IsNotEmpty() 
	description: string; 

	//@IsNotEmpty() 
	//numberingdian: number; 

	//@IsNotEmpty() 
	//healthprovider: number; 

	//@IsNotEmpty() 
	//activationcode: string; 

	//@IsNotEmpty() 
	//udacccanpreval: number; 

	//Remember add <type enum> import and add IsEnum in import class-validator 
	//@IsNotEmpty() 
	//@IsEnum(<define type enum>) 
	//status: <define type enum>; 

} 
