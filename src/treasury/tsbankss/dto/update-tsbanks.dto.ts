import { PartialType } from '@nestjs/swagger'; 
import { CreateTsbanksDto } from './create-tsbanks.dto'; 

export class UpdateTsbanksDto extends PartialType(CreateTsbanksDto) {} 
