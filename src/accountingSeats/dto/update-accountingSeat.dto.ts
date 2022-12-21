import { PartialType } from '@nestjs/swagger';
import { CreateAccountingSeatDto } from './create-accountingSeat.dto';

export class UpdateAccountingSeatDto extends PartialType(
  CreateAccountingSeatDto,
) {}
