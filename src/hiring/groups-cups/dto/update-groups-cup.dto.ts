import { PartialType } from '@nestjs/swagger';
import { CreateGroupsCupDto } from './create-groups-cup.dto';

export class UpdateGroupsCupDto extends PartialType(CreateGroupsCupDto) {}
