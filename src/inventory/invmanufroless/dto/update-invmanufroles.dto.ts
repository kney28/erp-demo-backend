import { PartialType } from '@nestjs/swagger';
import { CreateInvmanufrolesDto } from './create-invmanufroles.dto';

export class UpdateInvmanufrolesDto extends PartialType(
  CreateInvmanufrolesDto,
) {}
