import { IsNotEmpty } from 'class-validator'; 
import { Unique } from 'typeorm'; 

export class CreatePermissionsDto { 
	@IsNotEmpty() 
	@Unique(['code']) 
	code: string; 

	//@IsNotEmpty() 
	//profile: number; 

	//Remember add <type enum> import and add IsEnum in import class-validator 
	//@IsNotEmpty() 
	//@IsEnum(<define type enum>) 
	//option: <define type enum>; 

	@IsNotEmpty() 
	add: boolean; 

	@IsNotEmpty() 
	modify: boolean; 

	@IsNotEmpty() 
	record: boolean; 

	@IsNotEmpty() 
	query: boolean; 

	@IsNotEmpty() 
	remove: boolean; 

	@IsNotEmpty() 
	print: boolean; 

	@IsNotEmpty() 
	confirm: boolean; 

	@IsNotEmpty() 
	process: boolean; 

	@IsNotEmpty() 
	override: boolean; 

} 
