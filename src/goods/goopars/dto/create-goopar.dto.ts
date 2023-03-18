import { IsNotEmpty } from 'class-validator';
import { Unique } from 'typeorm';

export class CreateGooparDto {
  @IsNotEmpty()
  @Unique(['code'])
  code: string;

  @IsNotEmpty()
  description: string;

  /*	@IsNotEmpty() 
	idactacc: number; 

	@IsNotEmpty() 
	idadmdepacc: number; 

	@IsNotEmpty() 
	idweldepacc: number; 

	@IsNotEmpty() 
	idaccdepacc: number; 

	@IsNotEmpty() 
	idaccmovgoowar: number; 

	@IsNotEmpty() 
	idacclos: number; 

	@IsNotEmpty() 
	idaccoutusedue: number; 

	@IsNotEmpty() 
	idacccomowe: number; 

	@IsNotEmpty() 
	idcrecomacc: number; */

  //Remember add <type enum> import and add IsEnum in import class-validator
  //@IsNotEmpty()
  //@IsEnum(<define type enum>)
  //status: <define type enum>;
}
