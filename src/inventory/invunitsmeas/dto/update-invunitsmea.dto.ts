import { PartialType } from '@nestjs/swagger'; 
import { CreateInvunitsmeaDto } from './create-invunitsmea.dto'; 

export class UpdateInvunitsmeaDto extends PartialType(CreateInvunitsmeaDto) {} 
