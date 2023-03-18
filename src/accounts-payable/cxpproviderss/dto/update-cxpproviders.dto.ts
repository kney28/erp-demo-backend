import { PartialType } from '@nestjs/swagger';
import { CreateCxpprovidersDto } from './create-cxpproviders.dto';

export class UpdateCxpprovidersDto extends PartialType(CreateCxpprovidersDto) {}
