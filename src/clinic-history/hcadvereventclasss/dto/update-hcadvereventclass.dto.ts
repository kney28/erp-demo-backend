import { PartialType } from '@nestjs/swagger'; 
import { CreateHcadvereventclassDto } from './create-hcadvereventclass.dto'; 

export class UpdateHcadvereventclassDto extends PartialType(CreateHcadvereventclassDto) {} 
