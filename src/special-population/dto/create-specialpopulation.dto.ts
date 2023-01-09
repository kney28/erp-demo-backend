import { IsEnum, IsNotEmpty } from 'class-validator';
import { Unique } from 'typeorm';
import { SpecialPopulationStatus } from '../entities/specialpopulation.entity';

export class CreateSpecialPopulationDto {
  @IsNotEmpty()
  @Unique(['code'])
  code: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @IsEnum(SpecialPopulationStatus)
  status: SpecialPopulationStatus;
}
