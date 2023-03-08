import { IsNotEmpty } from 'class-validator';
import { Unique } from 'typeorm';

export class CreateAccinicialrunDto {
  @IsNotEmpty()
  @Unique(['accval'])
  accval: number;
}
