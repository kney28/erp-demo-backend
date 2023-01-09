import { PartialType } from '@nestjs/swagger';
import { CreateHealthProviderDto } from './create-healthprovider.dto';

export class UpdateHealthProviderDto extends PartialType(
  CreateHealthProviderDto,
) {}
