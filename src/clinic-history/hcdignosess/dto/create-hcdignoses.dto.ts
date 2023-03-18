import { IsNotEmpty } from 'class-validator';
import { Unique } from 'typeorm';

export class CreateHcdignosesDto {
  @IsNotEmpty()
  @Unique(['code'])
  code: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  lowlimage: number;

  @IsNotEmpty()
  upplimage: number;
}
