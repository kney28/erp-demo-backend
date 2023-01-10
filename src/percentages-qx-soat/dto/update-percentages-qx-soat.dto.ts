import { PartialType } from '@nestjs/swagger';
import { CreatePercentagesQxSoatDto } from './create-percentages-qx-soat.dto';

export class UpdatePercentagesQxSoatDto extends PartialType(CreatePercentagesQxSoatDto) {}
