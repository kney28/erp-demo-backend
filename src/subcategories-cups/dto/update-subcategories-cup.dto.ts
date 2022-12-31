import { PartialType } from '@nestjs/swagger';
import { CreateSubcategoriesCupDto } from './create-subcategories-cup.dto';

export class UpdateSubcategoriesCupDto extends PartialType(
  CreateSubcategoriesCupDto,
) {}
