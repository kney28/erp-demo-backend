import { PartialType } from '@nestjs/swagger';
import { CreateHealthAdministratorDto } from './create-healthadministrator.dto';

export class UpdateHealthAdministratorDto extends PartialType(
  CreateHealthAdministratorDto,
) {}
