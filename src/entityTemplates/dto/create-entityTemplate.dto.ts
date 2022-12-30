import { IsEnum, IsNotEmpty } from 'class-validator';
import { Unique } from 'typeorm';
import { EntityTemplateStatus } from '../entities/entitytemplate.entity';

export class CreateEntityTemplateDto {
  @IsNotEmpty()
  @Unique(['code'])
  code: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @IsEnum(EntityTemplateStatus)
  status: EntityTemplateStatus;
}
