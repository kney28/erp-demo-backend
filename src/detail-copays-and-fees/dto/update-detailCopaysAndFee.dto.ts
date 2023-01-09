import { PartialType } from '@nestjs/swagger';
import { CreateDetailCopaysAndFeeDto } from './create-detailCopaysAndFee.dto';

export class UpdateDetailCopaysAndFeeDto extends PartialType(
  CreateDetailCopaysAndFeeDto,
) {}
