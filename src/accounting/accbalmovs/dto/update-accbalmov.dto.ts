import { PartialType } from '@nestjs/swagger'; 
import { CreateAccbalmovDto } from './create-accbalmov.dto'; 

export class UpdateAccbalmovDto extends PartialType(CreateAccbalmovDto) {} 
