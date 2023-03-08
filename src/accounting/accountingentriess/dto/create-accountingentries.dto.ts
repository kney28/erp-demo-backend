import { IsNotEmpty } from 'class-validator'; 
import { Unique } from 'typeorm'; 

export class CreateAccountingentriesDto { 
	@IsNotEmpty() 
	@Unique(['code']) 
	code: string; 

	@IsNotEmpty() 
	accval: number; 

	@IsNotEmpty() 
	consecutive: number; 

	//Remember add <type enum> import and add IsEnum in import class-validator 
	//@IsNotEmpty() 
	//@IsEnum(<define type enum>) 
	//condition: <define type enum>; 

	@IsNotEmpty() 
	datedocument: Date; 

	@IsNotEmpty() 
	detail: string; 

} 
