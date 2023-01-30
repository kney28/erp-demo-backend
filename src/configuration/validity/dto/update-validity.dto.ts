import { PartialType } from '@nestjs/swagger';
import { CreateValidityDto } from './create-validity.dto';

export class UpdateValidityDto extends PartialType(CreateValidityDto) {}
