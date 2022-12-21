import { IsEnum, IsNotEmpty } from 'class-validator';
import { OccupationsStatus } from '../entities/occupation.entity';

export class CreateOccupationDto {
  @IsNotEmpty()
  code: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @IsEnum(OccupationsStatus)
  status: OccupationsStatus;
}
