import { PartialType } from '@nestjs/swagger'; 
import { CreateHcspecialtiesDto } from './create-hcspecialties.dto'; 

export class UpdateHcspecialtiesDto extends PartialType(CreateHcspecialtiesDto) {} 
