import { PartialType } from '@nestjs/swagger'; 
import { CreateAccinicialrunDto } from './create-accinicialrun.dto'; 

export class UpdateAccinicialrunDto extends PartialType(CreateAccinicialrunDto) {} 
