import { IsNotEmpty } from 'class-validator';
import { Unique } from 'typeorm';

export class CreateAccbeginningbalancesDto {
  @IsNotEmpty()
  @Unique(['code'])
  code: string;

  /*@IsNotEmpty() 
	idaccountvalidity: number; */

  //Remember add <type enum> import and add IsEnum in import class-validator
  //@IsNotEmpty()
  //@IsEnum(<define type enum>)
  //status: <define type enum>;
}
