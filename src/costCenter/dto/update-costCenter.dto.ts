import { PartialType } from '@nestjs/swagger';
import { CreateCostCenterDto } from './create-costcenter.dto';

export class UpdateCostCenterDto extends PartialType(CreateCostCenterDto) {}
