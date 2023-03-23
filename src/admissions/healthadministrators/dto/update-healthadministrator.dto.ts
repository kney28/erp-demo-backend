import { PartialType } from '@nestjs/swagger'; 
import { CreateHealthadministratorDto } from './create-healthadministrator.dto'; 

export class UpdateHealthadministratorDto extends PartialType(CreateHealthadministratorDto) {} 
