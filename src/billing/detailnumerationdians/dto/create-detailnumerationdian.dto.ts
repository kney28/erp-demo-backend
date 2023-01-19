import { IsNotEmpty } from 'class-validator'; 
//import { Unique } from 'typeorm'; 

export class CreateDetailnumerationdianDto { 
	//@IsNotEmpty() 
	//idnumerationdian: number; 

	@IsNotEmpty() 
	resolutiondian: string; 

	@IsNotEmpty() 
	dateresolution: string; 

	@IsNotEmpty() 
	initialdateresolution: string; 

	@IsNotEmpty() 
	resolutionenddate: string; 

	@IsNotEmpty() 
	billingprefix: string; 

	@IsNotEmpty() 
	initialinvoice: number; 

	@IsNotEmpty() 
	finalbill: number; 

	//Remember add <type enum> import and add IsEnum in import class-validator 
	//@IsNotEmpty() 
	//@IsEnum(<define type enum>) 
	//billingtype: <define type enum>; 

	//Remember add <type enum> import and add IsEnum in import class-validator 
	//@IsNotEmpty() 
	//@IsEnum(<define type enum>) 
	//status: <define type enum>; 

} 
