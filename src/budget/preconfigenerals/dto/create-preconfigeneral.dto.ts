import { IsNotEmpty } from 'class-validator';
import { Unique } from 'typeorm';

export class CreatePreconfigeneralDto {
  @IsNotEmpty()
  @Unique(['code'])
  code: string;

  /*@IsNotEmpty() 
	idvalidity: number; 

	@IsNotEmpty() 
	datdec: Date; 

	@IsNotEmpty() 
	decnum: string; 

	@IsNotEmpty() 
	budval: number; 

	@IsNotEmpty() 
	section: string; 

	@IsNotEmpty() 
	unitexe: string; 

	//Remember add <type enum> import and add IsEnum in import class-validator 
	//@IsNotEmpty() 
	//@IsEnum(<define type enum>) 
	//conannprobox: <define type enum>; 

	//Remember add <type enum> import and add IsEnum in import class-validator 
	//@IsNotEmpty() 
	//@IsEnum(<define type enum>) 
	//stabudproinc: <define type enum>; 

	@IsNotEmpty() 
	incbudprodat: Date; 

	@IsNotEmpty() 
	idusedubproinc: number; 

	//Remember add <type enum> import and add IsEnum in import class-validator 
	//@IsNotEmpty() 
	//@IsEnum(<define type enum>) 
	//stabudproexp: <define type enum>; 

	@IsNotEmpty() 
	budprodatexp: Date; 

	@IsNotEmpty() 
	idusebudproexp: number; 

	//Remember add <type enum> import and add IsEnum in import class-validator 
	//@IsNotEmpty() 
	//@IsEnum(<define type enum>) 
	//staannprocasinc: <define type enum>; 

	@IsNotEmpty() 
	datannprocasinc: Date; 

	@IsNotEmpty() 
	iduseannproincbox: number; 

	//Remember add <type enum> import and add IsEnum in import class-validator 
	//@IsNotEmpty() 
	//@IsEnum(<define type enum>) 
	//staannproboxexp: <define type enum>; 

	@IsNotEmpty() 
	datannproboxexp: number; 

	@IsNotEmpty() 
	iduseannproboxexp: number; 

	//Remember add <type enum> import and add IsEnum in import class-validator 
	//@IsNotEmpty() 
	//@IsEnum(<define type enum>) 
	//nuse: <define type enum>; 

	//Remember add <type enum> import and add IsEnum in import class-validator 
	//@IsNotEmpty() 
	//@IsEnum(<define type enum>) 
	//status: <define type enum>; */
}
