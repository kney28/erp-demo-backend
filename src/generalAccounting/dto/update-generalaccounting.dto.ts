import { PartialType } from '@nestjs/swagger';
import { CreateGeneralAccountingDto } from './create-generalaccounting.dto';

export class UpdateGeneralAccountingDto extends PartialType(
  CreateGeneralAccountingDto,
) {}
