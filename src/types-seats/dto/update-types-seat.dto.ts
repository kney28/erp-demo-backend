import { PartialType } from '@nestjs/swagger';
import { CreateTypesSeatDto } from './create-types-seat.dto';

export class UpdateTypesSeatDto extends PartialType(CreateTypesSeatDto) {}
