import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { DetailsAccountingSeatStatus } from '../entities/detailsAccountingSeat.entity';

export class CreateDetailsAccountingSeatDto {
  /*@IsNotEmpty()
  accountingseat: number;

  @IsNotEmpty()
  accountingcount: number;

  @IsNotEmpty()
  third: number;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  costcenter: number;

  @IsNotEmpty()
  description: string;*/

  @IsNotEmpty()
  debitvalue: number;

  @IsNotEmpty()
  creditvalue: number;

  @IsOptional()
  detail: string;

  @IsNotEmpty()
  @IsEnum(DetailsAccountingSeatStatus)
  status: DetailsAccountingSeatStatus;
}
