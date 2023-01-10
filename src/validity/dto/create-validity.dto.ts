import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { Unique } from 'typeorm';
import { ValidityStatus } from '../entities/validity.entity';

export class CreateValidityDto {
  @IsNotEmpty()
  @Unique(['year'])
  year: number;

  @IsOptional()
  minimumsalary: number;

  @IsOptional()
  uvtvalue: number;

  @IsNotEmpty()
  @IsEnum(ValidityStatus)
  status: ValidityStatus;
}
