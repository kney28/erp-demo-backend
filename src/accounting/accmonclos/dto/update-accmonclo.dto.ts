import { PartialType } from '@nestjs/swagger'; 
import { CreateAccmoncloDto } from './create-accmonclo.dto'; 

export class UpdateAccmoncloDto extends PartialType(CreateAccmoncloDto) {} 
