import { IsNotEmpty } from 'class-validator';
import { Unique } from 'typeorm';

export class CreateInvaccparDto {
  @IsNotEmpty()
  @Unique(['code'])
  code: string;

  @IsNotEmpty()
  description: string;

  /*@IsNotEmpty() 
	idledaccinc: number; 

	@IsNotEmpty() 
	idinvledacc: number; 

	@IsNotEmpty() 
	idexpledacc: number; 

	@IsNotEmpty() 
	idaccaccwitsoupurdec: number; 

	@IsNotEmpty() 
	idaccaccwitsounonrep: number; 

	@IsNotEmpty() 
	idcoscen: number; 

	@IsNotEmpty() 
	iddecwitcon: number; 

	@IsNotEmpty() 
	idnonfilwitcon: number; 

	@IsNotEmpty() 
	idledaccentrremdeb: number; 

	@IsNotEmpty() 
	identremcredelacc: number; 

	@IsNotEmpty() 
	idledaccdeboutrem: number; 

	@IsNotEmpty() 
	idoutremcreledacc: number; */

  //Remember add <type enum> import and add IsEnum in import class-validator
  //@IsNotEmpty()
  //@IsEnum(<define type enum>)
  //status: <define type enum>;
}
