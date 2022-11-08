import { PartialType } from '@nestjs/mapped-types';
import { CreateRegisterStatusDto } from './create-registerStatus.dto';

export class UpdateRegisterStatusDto extends PartialType(
  CreateRegisterStatusDto,
) {}
