import { PartialType } from '@nestjs/swagger';
import { CreateAccountCatalogDto } from './create-account-catalog.dto';

export class UpdateAccountCatalogDto extends PartialType(
  CreateAccountCatalogDto,
) {}
