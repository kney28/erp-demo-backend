import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { SubcategoriesCupsService } from './subcategories-cups.service';
import { CreateSubcategoriesCupDto } from './dto/create-subcategories-cup.dto';
import { UpdateSubcategoriesCupDto } from './dto/update-subcategories-cup.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { SubcategoriesCup } from './entities/subcategories-cup.entity';

@ApiTags('Subcategorías CUPS')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('subcategories-cups')
export class SubcategoriesCupsController {
  constructor(
    private readonly subcategoriesCupsService: SubcategoriesCupsService,
  ) {}

  @Post()
  create(
    @Body() createSubcategoriesCupDto: CreateSubcategoriesCupDto,
  ): Promise<SubcategoriesCup> {
    return this.subcategoriesCupsService.create(createSubcategoriesCupDto);
  }

  @Get()
  findAll(): Promise<SubcategoriesCup[]> {
    return this.subcategoriesCupsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<SubcategoriesCup> {
    return this.subcategoriesCupsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSubcategoriesCupDto: UpdateSubcategoriesCupDto,
  ): Promise<SubcategoriesCup> {
    return this.subcategoriesCupsService.update(id, updateSubcategoriesCupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<SubcategoriesCup> {
    return this.subcategoriesCupsService.remove(id);
  }
}
