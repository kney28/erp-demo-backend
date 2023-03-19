import { PartialType } from '@nestjs/swagger'; 
import { CreateHcdignosesDto } from './create-hcdignoses.dto'; 

export class UpdateHcdignosesDto extends PartialType(CreateHcdignosesDto) {} 
