import { PartialType } from '@nestjs/swagger';
import { CreateDetailsAccountingSeatDto } from './create-detailsAccountingSeat.dto';

export class UpdateDetailsAccountingSeatDto extends PartialType(
  CreateDetailsAccountingSeatDto,
) {}
