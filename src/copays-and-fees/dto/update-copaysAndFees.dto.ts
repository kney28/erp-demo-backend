import { PartialType } from '@nestjs/swagger';
import { CreateCopaysAndFeesDto } from './create-copaysandfees.dto';

export class UpdateCopaysAndFeeDto extends PartialType(
  CreateCopaysAndFeesDto,
) {}
