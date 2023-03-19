import { IsNotEmpty } from 'class-validator';
import { Unique } from 'typeorm';

export class CreateAccanncloDto {
  @IsNotEmpty()
  @Unique(['code'])
  code: string;

  /*@IsNotEmpty()
  validity: number;

  @IsNotEmpty()
  month: number;*/
}
