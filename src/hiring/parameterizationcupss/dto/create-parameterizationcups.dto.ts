import { IsNotEmpty } from 'class-validator'; 
import { Unique } from 'typeorm'; 

export class CreateParameterizationcupsDto { 
	@IsNotEmpty() 
	@Unique(['code']) 
	code: string; 

	@IsNotEmpty() 
	description: string; 

	/*@IsNotEmpty() 
	group: number; 

	@IsNotEmpty() 
	subgroup: number; 

	@IsNotEmpty() 
	category: number; 

	@IsNotEmpty() 
	subcategory: number;*/ 

	@IsNotEmpty() 
	codhomsoat: string; 

	@IsNotEmpty() 
	deshomsoat: string; 

	@IsNotEmpty() 
	codhomiss: string; 

	@IsNotEmpty() 
	deshomiss: string; 

	//Remember add <type enum> import and add IsEnum in import class-validator 
	//@IsNotEmpty() 
	//@IsEnum(<define type enum>) 
	//status: <define type enum>; 

} 
