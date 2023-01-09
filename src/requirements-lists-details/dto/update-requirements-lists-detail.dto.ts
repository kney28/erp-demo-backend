import { PartialType } from '@nestjs/swagger';
import { CreateRequirementsListsDetailDto } from './create-requirements-lists-detail.dto';

export class UpdateRequirementsListsDetailDto extends PartialType(CreateRequirementsListsDetailDto) {}
