import { IsNotEmpty } from 'class-validator';
import { Unique } from 'typeorm';

export class CreateAccannualclosingentryDto {
  @IsNotEmpty()
  @Unique(['code'])
  code: string;

  /*@IsNotEmpty() 
	validity: number; 

	@IsNotEmpty() 
	month: Date;*/

  //Remember add <type enum> import and add IsEnum in import class-validator
  //@IsNotEmpty()
  //@IsEnum(<define type enum>)
  //status: <define type enum>;
}
