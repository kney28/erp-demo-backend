import { IsNotEmpty } from 'class-validator'; 
import { Unique } from 'typeorm'; 

export class CreateModeratingcopaysdetDto { 
	
	@IsNotEmpty() 
	moderatingcopays: number; 

	//@IsNotEmpty() 
	//type: number; 

	@IsNotEmpty() 
	percentage: number; 

	@IsNotEmpty() 
	capevent: number; 

	@IsNotEmpty() 
	annualcap: number; 

	//Remember add <type enum> import and add IsEnum in import class-validator 
	//@IsNotEmpty() 
	//@IsEnum(<define type enum>) 
	//status: <define type enum>; 

} 
