import { PartialType } from '@nestjs/swagger'; 
import { CreateCareserviceDto } from './create-careservice.dto'; 

export class UpdateCareserviceDto extends PartialType(CreateCareserviceDto) {} 
