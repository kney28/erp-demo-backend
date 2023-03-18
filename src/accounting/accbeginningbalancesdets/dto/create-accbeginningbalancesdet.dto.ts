import { IsNotEmpty } from 'class-validator';
import { Unique } from 'typeorm';

export class CreateAccbeginningbalancesdetDto {
  @IsNotEmpty()
  @Unique(['code'])
  code: string;

  /*@IsNotEmpty()
  idaccountvalidity: number;

  @IsNotEmpty()
  idseattype: number;*/

  @IsNotEmpty()
  idconsbegibalan: number;

  @IsNotEmpty()
  docudate: Date;

  @IsNotEmpty()
  initbaladeta: string;

  //Remember add <type enum> import and add IsEnum in import class-validator
  //@IsNotEmpty()
  //@IsEnum(<define type enum>)
  //status: <define type enum>;
}
