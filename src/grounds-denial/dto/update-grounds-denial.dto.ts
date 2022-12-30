import { PartialType } from '@nestjs/swagger';
import { CreateGroundsDenialDto } from './create-grounds-denial.dto';

export class UpdateGroundsDenialDto extends PartialType(CreateGroundsDenialDto) {}
