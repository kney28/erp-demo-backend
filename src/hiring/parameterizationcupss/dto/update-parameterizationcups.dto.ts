import { PartialType } from '@nestjs/swagger'; 
import { CreateParameterizationcupsDto } from './create-parameterizationcups.dto'; 

export class UpdateParameterizationcupsDto extends PartialType(CreateParameterizationcupsDto) {} 
