import { PartialType } from '@nestjs/swagger'; 
import { CreateRequirementslistDto } from './create-requirementslist.dto'; 

export class UpdateRequirementslistDto extends PartialType(CreateRequirementslistDto) {} 
