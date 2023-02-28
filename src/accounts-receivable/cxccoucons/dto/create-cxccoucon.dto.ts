import { IsNotEmpty } from 'class-validator';
import { Unique } from 'typeorm';

export class CreateCxccouconDto {
  @IsNotEmpty()
  @Unique(['code'])
  code: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  type: number;

  //@IsNotEmpty()
  //idledacc: number;

  //Remember add <type enum> import and add IsEnum in import class-validator
  //@IsNotEmpty()
  //@IsEnum(<define type enum>)
  //status: <define type enum>;
}
