import { PartialType } from '@nestjs/swagger'; 
import { CreatePretypexpDto } from './create-pretypexp.dto'; 

export class UpdatePretypexpDto extends PartialType(CreatePretypexpDto) {} 
