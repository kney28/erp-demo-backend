import { PartialType } from '@nestjs/mapped-types';
import { CreateRegisterStatusDto } from './create-register-status.dto';

export class UpdateRegisterStatusDto extends PartialType(
  CreateRegisterStatusDto,
) {}
