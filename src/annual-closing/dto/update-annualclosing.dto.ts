import { PartialType } from '@nestjs/swagger';
import { CreateAnnualClosingDto } from './create-annualclosing.dto';

export class UpdateAnnualClosingDto extends PartialType(
  CreateAnnualClosingDto,
) {}
