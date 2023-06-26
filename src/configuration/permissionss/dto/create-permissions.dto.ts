import { IsNotEmpty } from 'class-validator'; 
import { Unique } from 'typeorm'; 
import { Erp_modules } from 'src/configuration/erp_moduless/entities/erp_modules.entity'
import { Profile } from 'src/configuration/profiles/entities/profile.entity';

export class CreatePermissionsDto { 
	@IsNotEmpty() 
	@Unique(['code']) 
	code: string; 

	@IsNotEmpty() 
	profile: Profile; 

	@IsNotEmpty() 
	option: Erp_modules; 

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
	run: boolean; 

	@IsNotEmpty() 
	override: boolean; 

} 
