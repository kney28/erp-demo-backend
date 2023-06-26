import { IsNotEmpty } from 'class-validator'; 
import { Unique } from 'typeorm'; 

export class CreateErp_modulesDto { 
	@IsNotEmpty() 
	@Unique(['code']) 
	code: string; 

	// @IsNotEmpty() 
	// module: string; 

	// @IsNotEmpty() 
	// menu: string; 

	// @IsNotEmpty() 
	// option: string; 

} 
