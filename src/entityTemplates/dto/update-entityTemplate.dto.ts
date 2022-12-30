import { PartialType } from '@nestjs/swagger';
import { CreateEntityTemplateDto } from './create-entityTemplate.dto';

export class UpdateEntityTemplateDto extends PartialType(
  CreateEntityTemplateDto,
) {}
