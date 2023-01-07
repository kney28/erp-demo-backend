import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { SpecialPopulationService } from './specialpopulation.service';
import { CreateSpecialPopulationDto } from './dto/create-specialpopulation.dto';
import { UpdateSpecialPopulationDto } from './dto/update-specialpopulation.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ClassSerializerInterceptor } from '@nestjs/common/serializer';
import { SpecialPopulation } from './entities/specialpopulation.entity';

@Controller('specialpopulation')
@UseGuards(JwtAuthGuard)
@UseInterceptors(ClassSerializerInterceptor)
export class SpecialPopulationController {
  constructor(
    private readonly specialPopulationService: SpecialPopulationService,
  ) {}

  @Post()
  create(
    @Body() createSpecialPopulationDto: CreateSpecialPopulationDto,
  ): Promise<SpecialPopulation> {
    return this.specialPopulationService.create(createSpecialPopulationDto);
  }

  @Get()
  findAll(): Promise<SpecialPopulation[]> {
    return this.specialPopulationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<SpecialPopulation> {
    return this.specialPopulationService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSpecialPopulationDto: UpdateSpecialPopulationDto,
  ): Promise<SpecialPopulation> {
    return this.specialPopulationService.update(id, updateSpecialPopulationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<SpecialPopulation> {
    return this.specialPopulationService.remove(id);
  }
}
