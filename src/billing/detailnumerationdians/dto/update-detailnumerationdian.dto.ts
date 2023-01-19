import { PartialType } from '@nestjs/swagger'; 
import { CreateDetailnumerationdianDto } from './create-detailnumerationdian.dto'; 

export class UpdateDetailnumerationdianDto extends PartialType(CreateDetailnumerationdianDto) {} 
