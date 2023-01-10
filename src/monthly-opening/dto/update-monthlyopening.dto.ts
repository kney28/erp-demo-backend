import { PartialType } from '@nestjs/swagger';
import { CreateMonthlyOpeningDto } from './create-monthlyopening.dto';

export class UpdateMonthlyOpeningDto extends PartialType(
  CreateMonthlyOpeningDto,
) {}
