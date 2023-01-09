import { IsDecimal, IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { Unique } from 'typeorm';
import { ValidityStatus } from '../entities/validity.entity';

export class CreateValidityDto {
  @IsNotEmpty()
  @Unique(['year'])
  year: number;

  @IsOptional()
  @IsDecimal()
  minimumsalary: number;

  @IsOptional()
  @IsDecimal()
  uvtvalue: number;

  @IsNotEmpty()
  @IsEnum(ValidityStatus)
  status: ValidityStatus;
}
