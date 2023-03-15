import { PartialType } from '@nestjs/swagger'; 
import { CreateTsboxesDto } from './create-tsboxes.dto'; 

export class UpdateTsboxesDto extends PartialType(CreateTsboxesDto) {} 
