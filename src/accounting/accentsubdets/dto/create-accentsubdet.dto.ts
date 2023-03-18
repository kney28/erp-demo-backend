import { IsNotEmpty } from 'class-validator';
import { Unique } from 'typeorm';

export class CreateAccentsubdetDto {
  @IsNotEmpty()
  @Unique(['code'])
  code: string;

  /*@IsNotEmpty()
  conret: number;*/

  //Remember add <type enum> import and add IsEnum in import class-validator
  //@IsNotEmpty()
  //@IsEnum(<define type enum>)
  //nature: <define type enum>;

  @IsNotEmpty()
  basevalue: number;

  @IsNotEmpty()
  withholdingpercentage: number;

  @IsNotEmpty()
  holdvalue: number;

  //Remember add <type enum> import and add IsEnum in import class-validator
  //@IsNotEmpty()
  //@IsEnum(<define type enum>)
  //status: <define type enum>;
}
