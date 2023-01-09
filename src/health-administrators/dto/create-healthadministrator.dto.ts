import { IsEnum, IsNotEmpty } from 'class-validator';
import { Unique } from 'typeorm';
import {
  HealthAdministratorIdentificationType,
  HealthAdministratorStatus,
  HealthAdministratorType,
} from '../entities/healthadministrator.entity';

export class CreateHealthAdministratorDto {
  @IsNotEmpty()
  @Unique(['code'])
  code: string;

  @IsNotEmpty()
  description: string;
  /*
  @IsNotEmpty()
  third: number;

  @IsNotEmpty()
  name: string;
  */
  @IsNotEmpty()
  @IsEnum(HealthAdministratorType)
  type: HealthAdministratorType;

  @IsNotEmpty()
  descriptiontype: string;

  @IsNotEmpty()
  @IsEnum(HealthAdministratorIdentificationType)
  identificationtype: HealthAdministratorIdentificationType;

  @IsNotEmpty()
  identificationtypedescription: string;

  @IsNotEmpty()
  @IsEnum(HealthAdministratorStatus)
  status: HealthAdministratorStatus;
}
