import { PartialType } from '@nestjs/swagger';
import { CreatePreconfigeneralDto } from './create-preconfigeneral.dto';

export class UpdatePreconfigeneralDto extends PartialType(
  CreatePreconfigeneralDto,
) {}
