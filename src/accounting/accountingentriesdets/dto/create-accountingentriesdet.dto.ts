import { IsNotEmpty } from 'class-validator';
import { Unique } from 'typeorm';

export class CreateAccountingentriesdetDto {
  @IsNotEmpty()
  @Unique(['code'])
  code: string;

  /*@IsNotEmpty() 
	accent: number;*/

  /*@IsNotEmpty() 
	ledacc: number; 

	/*@IsNotEmpty() 
	third: number; */

  /*@IsNotEmpty()
  costcenter: number;*/

  @IsNotEmpty()
  debitvalue: number;

  @IsNotEmpty()
  creditvalue: number;

  @IsNotEmpty()
  detail: string;

  //Remember add <type enum> import and add IsEnum in import class-validator
  //@IsNotEmpty()
  //@IsEnum(<define type enum>)
  //status: <define type enum>;
}
