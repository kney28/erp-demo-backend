import { PartialType } from '@nestjs/mapped-types';
import { CreateContactTypeDto } from './create-contactType.dto';

export class UpdateContactTypeDto extends PartialType(CreateContactTypeDto) {}
