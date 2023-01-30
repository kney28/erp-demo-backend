import { PartialType } from '@nestjs/swagger'; 
import { CreateEntitytemplateDto } from './create-entitytemplate.dto'; 

export class UpdateEntitytemplateDto extends PartialType(CreateEntitytemplateDto) {} 
