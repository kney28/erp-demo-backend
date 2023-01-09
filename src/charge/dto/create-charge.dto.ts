import { IsEnum, IsNotEmpty } from 'class-validator';
import { Unique } from 'typeorm';
import { ChargeStatus } from '../entities/charge.entity';

export class CreateChargeDto {
  @IsNotEmpty()
  @Unique(['code'])
  code: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @IsEnum(ChargeStatus)
  status: ChargeStatus;
}
