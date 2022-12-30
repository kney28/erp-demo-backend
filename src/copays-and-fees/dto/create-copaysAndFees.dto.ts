import { IsEnum, IsNotEmpty } from 'class-validator';
import { Unique } from 'typeorm';
import { CopaysAndFeesStatus } from '../entities/copaysandfee.entity';

export class CreateCopaysAndFeesDto {
  @IsNotEmpty()
  @Unique(['code'])
  code: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @IsEnum(CopaysAndFeesStatus)
  status: CopaysAndFeesStatus;
}
