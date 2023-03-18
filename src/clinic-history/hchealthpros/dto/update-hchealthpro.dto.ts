import { PartialType } from '@nestjs/swagger'; 
import { CreateHchealthproDto } from './create-hchealthpro.dto'; 

export class UpdateHchealthproDto extends PartialType(CreateHchealthproDto) {} 
