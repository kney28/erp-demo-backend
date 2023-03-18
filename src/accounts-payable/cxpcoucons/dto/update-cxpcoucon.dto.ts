import { PartialType } from '@nestjs/swagger';
import { CreateCxpcouconDto } from './create-cxpcoucon.dto';

export class UpdateCxpcouconDto extends PartialType(CreateCxpcouconDto) {}
