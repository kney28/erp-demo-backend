import { PartialType } from '@nestjs/swagger'; 
import { CreateAppreacanDto } from './create-appreacan.dto'; 

export class UpdateAppreacanDto extends PartialType(CreateAppreacanDto) {} 
