import { IsNotEmpty } from 'class-validator'; 
import { Unique } from 'typeorm'; 

export class CreateApiDto { 
	@IsNotEmpty() 
	@Unique(['name']) 
	name: string; 

	@IsNotEmpty() 
	description: string; 

	@IsNotEmpty() 
	api_base: string; 

	@IsNotEmpty() 
	api_user: string; 

	@IsNotEmpty() 
	api_password: string; 

	/*
	@IsNotEmpty() 
	api_tokent: string; 
	*/
} 
