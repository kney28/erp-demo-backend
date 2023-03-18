import { PartialType } from '@nestjs/swagger';
import { CreateCxccouconDto } from './create-cxccoucon.dto';

export class UpdateCxccouconDto extends PartialType(CreateCxccouconDto) {}
