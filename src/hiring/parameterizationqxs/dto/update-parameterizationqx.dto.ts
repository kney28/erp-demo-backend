import { PartialType } from '@nestjs/swagger'; 
import { CreateParameterizationqxDto } from './create-parameterizationqx.dto'; 

export class UpdateParameterizationqxDto extends PartialType(CreateParameterizationqxDto) {} 
