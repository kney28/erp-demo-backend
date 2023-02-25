import { PartialType } from '@nestjs/swagger';
import { CreateGooclaDto } from './create-goocla.dto';

export class UpdateGooclaDto extends PartialType(CreateGooclaDto) {}
