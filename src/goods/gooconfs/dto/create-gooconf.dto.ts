import { IsNotEmpty } from 'class-validator'; 
import { Unique } from 'typeorm'; 

export class CreateGooconfDto { 
	@IsNotEmpty() 
	@Unique(['code']) 
	code: string; 

	@IsNotEmpty() 
	description: string; 

	@IsNotEmpty() 
	idgoocla: number; 

	@IsNotEmpty() 
	idaccpar: number; 

	//Remember add <type enum> import and add IsEnum in import class-validator 
	//@IsNotEmpty() 
	//@IsEnum(<define type enum>) 
	//tipgoo: <define type enum>; 

	//Remember add <type enum> import and add IsEnum in import class-validator 
	//@IsNotEmpty() 
	//@IsEnum(<define type enum>) 
	//gendep: <define type enum>; 

	@IsNotEmpty() 
	typuselif: number; 

	@IsNotEmpty() 
	uselif: number; 

	@IsNotEmpty() 
	coniva: number; 

	@IsNotEmpty() 
	resvaltyp: number; 

	@IsNotEmpty() 
	resval: number; 

	//Remember add <type enum> import and add IsEnum in import class-validator 
	//@IsNotEmpty() 
	//@IsEnum(<define type enum>) 
	//state: <define type enum>; 

} 
