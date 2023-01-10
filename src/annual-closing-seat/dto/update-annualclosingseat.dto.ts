import { PartialType } from '@nestjs/swagger';
import { CreateAnnualClosingSeatDto } from './create-annualclosingseat.dto';

export class UpdateAnnualClosingSeatDto extends PartialType(
  CreateAnnualClosingSeatDto,
) {}
