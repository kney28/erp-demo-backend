import { PartialType } from '@nestjs/swagger';
import { CreateRetentionConceptDto } from './create-retention-concept.dto';

export class UpdateRetentionConceptDto extends PartialType(CreateRetentionConceptDto) {}
