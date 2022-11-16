import { PartialType } from '@nestjs/mapped-types';
import { CreateThirdPersonDto } from './create-thirdPerson.dto';

export class UpdateThirdPersonDto extends PartialType(CreateThirdPersonDto) {}
