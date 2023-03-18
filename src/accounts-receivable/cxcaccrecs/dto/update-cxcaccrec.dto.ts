import { PartialType } from '@nestjs/swagger';
import { CreateCxcaccrecDto } from './create-cxcaccrec.dto';

export class UpdateCxcaccrecDto extends PartialType(CreateCxcaccrecDto) {}
