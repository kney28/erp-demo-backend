import { PartialType } from '@nestjs/swagger'; 
import { CreatePercentajeqxdetDto } from './create-percentajeqxdet.dto'; 

export class UpdatePercentajeqxdetDto extends PartialType(CreatePercentajeqxdetDto) {} 
