import { PartialType } from '@nestjs/swagger';
import { CreateAccountingValidityDto } from './create-accountingvalidity.dto';

export class UpdateAccountingValidityDto extends PartialType(
  CreateAccountingValidityDto,
) {}
