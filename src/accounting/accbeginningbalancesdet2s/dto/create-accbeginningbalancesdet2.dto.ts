import { IsNotEmpty } from 'class-validator';
import { Unique } from 'typeorm';

export class CreateAccbeginningbalancesdet2Dto {
  @IsNotEmpty()
  @Unique(['code'])
  code: string;

  /*@IsNotEmpty() 
	idaccoentry: number; 

	@IsNotEmpty() 
	idledgacco: number; 

	@IsNotEmpty() 
	idthird: number; 

	@IsNotEmpty() 
	idcostcent: number; */

  @IsNotEmpty()
  duevalue: number;

  @IsNotEmpty()
  credvalue: number;

  @IsNotEmpty()
  accoentrdeta: string;

  //Remember add <type enum> import and add IsEnum in import class-validator
  //@IsNotEmpty()
  //@IsEnum(<define type enum>)
  //status: <define type enum>;
}
