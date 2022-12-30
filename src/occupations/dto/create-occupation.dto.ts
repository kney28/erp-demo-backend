import { IsEnum, IsNotEmpty } from 'class-validator';
import { Unique } from 'typeorm';
import { OccupationsStatus } from '../entities/occupation.entity';

export class CreateOccupationDto {
  @IsNotEmpty()
  @Unique(['code'])
  code: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @IsEnum(OccupationsStatus)
  status: OccupationsStatus;
}
