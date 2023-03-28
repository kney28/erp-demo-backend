import { PartialType } from '@nestjs/swagger'; 
import { CreatePretypincDto } from './create-pretypinc.dto'; 

export class UpdatePretypincDto extends PartialType(CreatePretypincDto) {} 
