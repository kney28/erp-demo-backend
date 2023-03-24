import { PartialType } from '@nestjs/swagger'; 
import { CreateTscasrecconDto } from './create-tscasreccon.dto'; 

export class UpdateTscasrecconDto extends PartialType(CreateTscasrecconDto) {} 
