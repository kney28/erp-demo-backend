import { PartialType } from '@nestjs/swagger';
import { CreateMonthlyClosureDto } from './create-monthlyclosure.dto';

export class UpdateMonthlyClosureDto extends PartialType(
  CreateMonthlyClosureDto,
) {}
