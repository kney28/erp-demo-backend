import { PartialType } from '@nestjs/swagger';
import { CreateCategoriesCupDto } from './create-categories-cup.dto';

export class UpdateCategoriesCupDto extends PartialType(CreateCategoriesCupDto) {}
