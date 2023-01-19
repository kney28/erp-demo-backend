import { PartialType } from '@nestjs/swagger'; 
import { CreateNumerationdianDto } from './create-numerationdian.dto'; 

export class UpdateNumerationdianDto extends PartialType(CreateNumerationdianDto) {} 
