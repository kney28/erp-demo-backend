import { IsDecimal, IsEnum, IsNotEmpty, Min } from 'class-validator';
import {
  DetailCopaysAndFeeStatus,
  DetailCopaysAndFeeType,
} from '../entities/detailCopaysAndFee.entity';

export class CreateDetailCopaysAndFeeDto {
  /*@IsNotEmpty()
  copaysandfees: number;*/

  @IsNotEmpty()
  @IsEnum(DetailCopaysAndFeeType)
  kind: DetailCopaysAndFeeType;

  @IsNotEmpty()
  @IsDecimal()
  @Min(0)
  percentage: number;

  @IsNotEmpty()
  @IsDecimal()
  @Min(0)
  capevent: number;

  @IsNotEmpty()
  @IsDecimal()
  @Min(0)
  annualcap: number;

  @IsNotEmpty()
  @IsEnum(DetailCopaysAndFeeStatus)
  status: DetailCopaysAndFeeStatus;
}
