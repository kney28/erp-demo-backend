import { PartialType } from '@nestjs/swagger'; 
import { CreateAcccongenDto } from './create-acccongen.dto'; 

export class UpdateAcccongenDto extends PartialType(CreateAcccongenDto) {} 
