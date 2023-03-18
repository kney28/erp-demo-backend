import { IsNotEmpty } from 'class-validator';
import { Unique } from 'typeorm';

export class CreateCxpprovidersDto {
  @IsNotEmpty()
  @Unique(['code'])
  code: string;

  @IsNotEmpty()
  idthird: number;

  //@IsNotEmpty()
  //thirddocument: string;

  //Remember add <type enum> import and add IsEnum in import class-validator
  //@IsNotEmpty()
  //@IsEnum(<define type enum>)
  //typeprovider: <define type enum>;

  @IsNotEmpty()
  idledacc: number;

  @IsNotEmpty()
  idecoact: number;

  @IsNotEmpty()
  ecoactper: number;

  //Remember add <type enum> import and add IsEnum in import class-validator
  //@IsNotEmpty()
  //@IsEnum(<define type enum>)
  //status: <define type enum>;
}
