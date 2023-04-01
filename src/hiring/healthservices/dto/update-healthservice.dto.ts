import { PartialType } from '@nestjs/swagger'; 
import { CreateHealthserviceDto } from './create-healthservice.dto'; 

export class UpdateHealthserviceDto extends PartialType(CreateHealthserviceDto) {} 
