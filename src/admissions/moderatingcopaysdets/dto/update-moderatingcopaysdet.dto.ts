import { PartialType } from '@nestjs/swagger'; 
import { CreateModeratingcopaysdetDto } from './create-moderatingcopaysdet.dto'; 

export class UpdateModeratingcopaysdetDto extends PartialType(CreateModeratingcopaysdetDto) {} 
