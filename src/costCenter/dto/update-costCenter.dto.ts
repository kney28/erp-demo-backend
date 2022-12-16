import { PartialType } from '@nestjs/swagger';
import { CreateCostCenterDto } from './create-costCenter.dto';

export class UpdateCostCenterDto extends PartialType(CreateCostCenterDto) {}
