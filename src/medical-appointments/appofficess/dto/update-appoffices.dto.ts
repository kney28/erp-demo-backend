import { PartialType } from '@nestjs/swagger'; 
import { CreateAppofficesDto } from './create-appoffices.dto'; 

export class UpdateAppofficesDto extends PartialType(CreateAppofficesDto) {} 
