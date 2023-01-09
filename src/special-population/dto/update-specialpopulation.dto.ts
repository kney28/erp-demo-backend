import { PartialType } from '@nestjs/swagger';
import { CreateSpecialPopulationDto } from './create-specialpopulation.dto';

export class UpdateSpecialPopulationDto extends PartialType(
  CreateSpecialPopulationDto,
) {}
