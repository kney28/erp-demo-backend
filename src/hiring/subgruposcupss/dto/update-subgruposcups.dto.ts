import { PartialType } from '@nestjs/swagger'; 
import { CreateSubgruposcupsDto } from './create-subgruposcups.dto'; 

export class UpdateSubgruposcupsDto extends PartialType(CreateSubgruposcupsDto) {} 
