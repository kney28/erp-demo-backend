import { PartialType } from '@nestjs/swagger'; 
import { CreateSubcatcupsDto } from './create-subcatcups.dto'; 

export class UpdateSubcatcupsDto extends PartialType(CreateSubcatcupsDto) {} 
