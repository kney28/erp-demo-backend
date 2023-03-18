import { PartialType } from '@nestjs/swagger'; 
import { CreateTsnotconDto } from './create-tsnotcon.dto'; 

export class UpdateTsnotconDto extends PartialType(CreateTsnotconDto) {} 
