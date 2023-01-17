import { PartialType } from '@nestjs/swagger';
import { CreatePercentagesQxSoatDetailDto } from './create-percentages-qx-soat-detail.dto';

export class UpdatePercentagesQxSoatDetailDto extends PartialType(CreatePercentagesQxSoatDetailDto) {}
