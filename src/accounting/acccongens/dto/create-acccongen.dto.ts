import { IsNotEmpty } from 'class-validator'; 
import { Unique } from 'typeorm'; 

export class CreateAcccongenDto { 
	@IsNotEmpty() 
	@Unique(['code']) 
	code: string; 

	//@IsNotEmpty() 
	//validity: number; 

	//Remember add <type enum> import and add IsEnum in import class-validator 
	//@IsNotEmpty() 
	//@IsEnum(<define type enum>) 
	//month: <define type enum>; 

	//Remember add <type enum> import and add IsEnum in import class-validator 
	//@IsNotEmpty() 
	//@IsEnum(<define type enum>) 
	//rounding: <define type enum>; 

	//@IsNotEmpty() 
	//seattypeclosure: number; 

	//@IsNotEmpty() 
	//lostcount: number; 

  //@IsNotEmpty() 
  //profitaccount: number; 

	//@IsNotEmpty() 
	//closingaccount: number; 

	//Remember add <type enum> import and add IsEnum in import class-validator 
	//@IsNotEmpty() 
	//@IsEnum(<define type enum>) 
	//inuse: <define type enum>; 

	//Remember add <type enum> import and add IsEnum in import class-validator 
	//@IsNotEmpty() 
	//@IsEnum(<define type enum>) 
	//status: <define type enum>; 

} 