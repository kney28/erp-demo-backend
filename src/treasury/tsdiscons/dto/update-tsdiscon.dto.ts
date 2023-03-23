import { PartialType } from '@nestjs/swagger'; 
import { CreateTsdisconDto } from './create-tsdiscon.dto'; 

export class UpdateTsdisconDto extends PartialType(CreateTsdisconDto) {} 
