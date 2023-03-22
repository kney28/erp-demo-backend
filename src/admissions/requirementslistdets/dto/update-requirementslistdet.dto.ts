import { PartialType } from '@nestjs/swagger'; 
import { CreateRequirementslistdetDto } from './create-requirementslistdet.dto'; 

export class UpdateRequirementslistdetDto extends PartialType(CreateRequirementslistdetDto) {} 
