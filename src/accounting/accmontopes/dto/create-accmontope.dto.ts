import { IsNotEmpty } from 'class-validator';
import { Unique } from 'typeorm';

export class CreateAccmontopeDto {
  @IsNotEmpty()
  @Unique(['code'])
  code: string;

  /*@IsNotEmpty() 
	month: string; */
}
