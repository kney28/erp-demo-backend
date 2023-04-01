import { PartialType } from '@nestjs/swagger'; 
import { CreateHcallerclassDto } from './create-hcallerclass.dto'; 

export class UpdateHcallerclassDto extends PartialType(CreateHcallerclassDto) {} 
