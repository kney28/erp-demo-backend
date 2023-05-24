import { PartialType } from '@nestjs/swagger'; 
import { CreateHcvacunclassDto } from './create-hcvacunclass.dto'; 

export class UpdateHcvacunclassDto extends PartialType(CreateHcvacunclassDto) {} 
