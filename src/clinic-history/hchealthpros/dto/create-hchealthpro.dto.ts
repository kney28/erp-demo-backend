import { IsNotEmpty } from 'class-validator';
import { Unique } from 'typeorm';

export class CreateHchealthproDto {
  @IsNotEmpty()
  @Unique(['code'])
  code: string;

  @IsNotEmpty()
  description: string;

  //Remember add <type enum> import and add IsEnum in import class-validator
  //@IsNotEmpty()
  //@IsEnum(<define type enum>)
  //typheapro: <define type enum>;

  /*@IsNotEmpty() 
	idthird: number; */

  @IsNotEmpty()
  businesscard: string;

  //Remember add <type enum> import and add IsEnum in import class-validator
  //@IsNotEmpty()
  //@IsEnum(<define type enum>)
  //conttyp: <define type enum>;

  /*@IsNotEmpty()
  idspecialty: number;*/

  @IsNotEmpty()
  digsig: string;

  //Remember add <type enum> import and add IsEnum in import class-validator
  //@IsNotEmpty()
  //@IsEnum(<define type enum>)
  //status: <define type enum>;
}
