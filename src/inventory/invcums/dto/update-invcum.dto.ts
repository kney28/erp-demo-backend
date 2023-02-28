import { PartialType } from '@nestjs/swagger'; 
import { CreateInvcumDto } from './create-invcum.dto'; 

export class UpdateInvcumDto extends PartialType(CreateInvcumDto) {} 
