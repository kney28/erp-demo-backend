import { PartialType } from '@nestjs/swagger';
import { CreateThirdPersonDto } from './create-third-person.dto';

export class UpdateThirdPersonDto extends PartialType(CreateThirdPersonDto) {}
