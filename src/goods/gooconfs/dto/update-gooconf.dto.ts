import { PartialType } from '@nestjs/swagger'; 
import { CreateGooconfDto } from './create-gooconf.dto'; 

export class UpdateGooconfDto extends PartialType(CreateGooconfDto) {} 
