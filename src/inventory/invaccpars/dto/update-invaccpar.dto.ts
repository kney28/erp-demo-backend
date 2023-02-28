import { PartialType } from '@nestjs/swagger'; 
import { CreateInvaccparDto } from './create-invaccpar.dto'; 

export class UpdateInvaccparDto extends PartialType(CreateInvaccparDto) {} 
