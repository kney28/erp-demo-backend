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
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CategoriesCupsService } from './categories-cups.service';
import { CreateCategoriesCupDto } from './dto/create-categories-cup.dto';
import { UpdateCategoriesCupDto } from './dto/update-categories-cup.dto';
import { CategoriesCup } from './entities/categories-cup.entity';

@UseGuards(JwtAuthGuard)
@ApiTags('Categorías CUPS')
@ApiBearerAuth()
@Controller('categories-cups')
export class CategoriesCupsController {
  constructor(private readonly categoriesCupsService: CategoriesCupsService) {}

  @Post()
  create(
    @Body() createCategoriesCupDto: CreateCategoriesCupDto,
  ): Promise<CategoriesCup> {
    return this.categoriesCupsService.create(createCategoriesCupDto);
  }

  @Get()
  findAll(): Promise<CategoriesCup[]> {
    return this.categoriesCupsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<CategoriesCup> {
    return this.categoriesCupsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoriesCupDto: UpdateCategoriesCupDto,
  ): Promise<CategoriesCup> {
    return this.categoriesCupsService.update(id, updateCategoriesCupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<CategoriesCup> {
    return this.categoriesCupsService.remove(id);
  }
}
