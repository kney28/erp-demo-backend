import { PartialType } from '@nestjs/swagger'; 
import { CreateAccentsubdetDto } from './create-accentsubdet.dto'; 

export class UpdateAccentsubdetDto extends PartialType(CreateAccentsubdetDto) {} 
