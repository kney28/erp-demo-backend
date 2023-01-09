import { PartialType } from '@nestjs/swagger';
import { CreateSisbenLevelDto } from './create-sisbenlevel.dto';

export class UpdateSisbenLevelDto extends PartialType(CreateSisbenLevelDto) {}
