import { PartialType } from '@nestjs/swagger';
import { CreateRequirementsListDto } from './create-requirements-list.dto';

export class UpdateRequirementsListDto extends PartialType(CreateRequirementsListDto) {}
