import { PartialType } from '@nestjs/swagger';
import { CreateThirdPartyAccountantDto } from './create-third-party-accountant.dto';

export class UpdateThirdPartyAccountantDto extends PartialType(CreateThirdPartyAccountantDto) {}
