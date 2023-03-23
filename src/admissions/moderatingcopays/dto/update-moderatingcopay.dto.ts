import { PartialType } from '@nestjs/swagger'; 
import { CreateModeratingcopayDto } from './create-moderatingcopay.dto'; 

export class UpdateModeratingcopayDto extends PartialType(CreateModeratingcopayDto) {} 
