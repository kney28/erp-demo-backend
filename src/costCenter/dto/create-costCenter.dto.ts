import { IsEnum, IsNotEmpty } from 'class-validator';
import { Unique } from 'typeorm';
import { CostCenterStatus } from '../entities/costCenter.entity';

export class CreateCostCenterDto {
  @IsNotEmpty()
  @Unique(['code'])
  code: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @IsEnum(CostCenterStatus)
  status: CostCenterStatus;
}
