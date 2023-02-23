import { PartialType } from '@nestjs/swagger'; 
import { CreateGooparDto } from './create-goopar.dto'; 

export class UpdateGooparDto extends PartialType(CreateGooparDto) {} 
