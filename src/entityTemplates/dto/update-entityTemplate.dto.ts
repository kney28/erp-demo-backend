import { PartialType } from '@nestjs/swagger';
import { CreateEntityTemplateDto } from './create-entitytemplate.dto';

export class UpdateEntityTemplateDto extends PartialType(
  CreateEntityTemplateDto,
) {}
