import { IsNotEmpty } from 'class-validator'; 
import { Unique } from 'typeorm'; 

export class CreateAccbeginningbalancesdet3Dto { 
	@IsNotEmpty() 
	@Unique(['code']) 
	code: string; 

	@IsNotEmpty() 
	idaccoentry: number; 

	@IsNotEmpty() 
	idconcrete: number; 

	//Remember add <type enum> import and add IsEnum in import class-validator 
	//@IsNotEmpty() 
	//@IsEnum(<define type enum>) 
	//nature: <define type enum>; 

	@IsNotEmpty() 
	basevalue: number; 

	@IsNotEmpty() 
	withholdingperc: number; 

	@IsNotEmpty() 
	holdvalue: number; 

	@IsNotEmpty() 
	retainedvalue: number; 

	//Remember add <type enum> import and add IsEnum in import class-validator 
	//@IsNotEmpty() 
	//@IsEnum(<define type enum>) 
	//status: <define type enum>; 

} 
