import { IsNotEmpty } from 'class-validator';
import { Unique } from 'typeorm';

export class CreateAppofficesDto {
  @IsNotEmpty()
  @Unique(['code'])
  code: string;

  @IsNotEmpty()
  description: string;

  /*@IsNotEmpty() 
	idheadquarters: number; */

  //Remember add <type enum> import and add IsEnum in import class-validator
  //@IsNotEmpty()
  //@IsEnum(<define type enum>)
  //emeroffice: <define type enum>;

  //Remember add <type enum> import and add IsEnum in import class-validator
  //@IsNotEmpty()
  //@IsEnum(<define type enum>)
  //status: <define type enum>;
}
