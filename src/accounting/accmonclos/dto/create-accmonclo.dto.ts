import { IsNotEmpty } from 'class-validator';
import { Unique } from 'typeorm';

export class CreateAccmoncloDto {
  @IsNotEmpty()
  @Unique(['code'])
  code: string;

  /*@IsNotEmpty() 
	month: number; */
}
