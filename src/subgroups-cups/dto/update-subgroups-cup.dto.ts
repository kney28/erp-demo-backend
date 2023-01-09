import { PartialType } from '@nestjs/swagger';
import { CreateSubgroupsCupDto } from './create-subgroups-cup.dto';

export class UpdateSubgroupsCupDto extends PartialType(CreateSubgroupsCupDto) {}
