import { PartialType } from '@nestjs/swagger'; 
import { CreateSisbenlevelDto } from './create-sisbenlevel.dto'; 

export class UpdateSisbenlevelDto extends PartialType(CreateSisbenlevelDto) {} 
