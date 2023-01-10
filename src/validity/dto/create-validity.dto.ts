import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { Unique } from 'typeorm';
import { ValidityStatus } from '../entities/validity.entity';

export class CreateValidityDto {
  @IsNotEmpty()
  @Unique(['year'])
  year: number;

  @IsOptional()
<<<<<<< HEAD
  minimumsalary: number;

  @IsOptional()
=======
  @IsDecimal()
  minimumsalary: number;

  @IsOptional()
  @IsDecimal()
>>>>>>> 3a252654b08d28add2a8b96fa8b055442705bebd
  uvtvalue: number;

  @IsNotEmpty()
  @IsEnum(ValidityStatus)
  status: ValidityStatus;
}
