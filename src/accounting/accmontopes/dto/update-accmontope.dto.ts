import { PartialType } from '@nestjs/swagger'; 
import { CreateAccmontopeDto } from './create-accmontope.dto'; 

export class UpdateAccmontopeDto extends PartialType(CreateAccmontopeDto) {} 
