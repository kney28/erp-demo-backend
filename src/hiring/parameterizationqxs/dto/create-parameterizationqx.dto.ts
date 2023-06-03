import { IsNotEmpty, IsEnum } from 'class-validator'; 
import { Unique } from 'typeorm'; 
import { Tariffmanual } from 'src/hiring/parameterizationqxs/entities/parameterizationqx.entity';
import { Status } from 'src/base/baseEntity';

export class CreateParameterizationqxDto { 
	@IsNotEmpty() 
	@Unique(['code']) 
	code: string; 

	@IsNotEmpty({
		message: 'El campo descripción no puede estar vacio'
	}) 
	description: string; 

	//Remember add <type enum> import and add IsEnum in import class-validator 
	@IsNotEmpty({
		message: 'El campo manual tarifario no puede estar vacio'
	}) 
	@IsEnum(Tariffmanual) 
	tariffmanual: Tariffmanual; 

	//Remember add <type enum> import and add IsEnum in import class-validator 
	@IsNotEmpty() 
	@IsEnum(Status) 
	status: Status; 

} 
