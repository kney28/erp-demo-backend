import { PartialType } from '@nestjs/swagger'; 
import { CreateInvpharforDto } from './create-invpharfor.dto'; 

export class UpdateInvpharforDto extends PartialType(CreateInvpharforDto) {} 
