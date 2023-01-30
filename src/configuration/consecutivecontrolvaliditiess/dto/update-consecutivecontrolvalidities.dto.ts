import { PartialType } from '@nestjs/swagger'; 
import { CreateConsecutivecontrolvaliditiesDto } from './create-consecutivecontrolvalidities.dto'; 

export class UpdateConsecutivecontrolvaliditiesDto extends PartialType(CreateConsecutivecontrolvaliditiesDto) {} 
