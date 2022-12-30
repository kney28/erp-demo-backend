import { PartialType } from '@nestjs/swagger';
import { CreateCopaysAndFeesDto } from './create-copaysAndFees.dto';

export class UpdateCopaysAndFeeDto extends PartialType(
  CreateCopaysAndFeesDto,
) {}
