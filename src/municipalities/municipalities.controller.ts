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
import { MunicipalitiesService } from './municipalities.service';
import { CreateMunicipalityDto } from './dto/create-municipality.dto';
import { UpdateMunicipalityDto } from './dto/update-municipality.dto';
import { Municipality } from './entities/municipality.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
@UseGuards(JwtAuthGuard)
@Controller('municipalities')
export class MunicipalitiesController {
  constructor(private readonly municipalitiesService: MunicipalitiesService) {}

  @Post()
  async create(
    @Body() createMunicipalityDto: CreateMunicipalityDto,
  ): Promise<Municipality> {
    return this.municipalitiesService.create(createMunicipalityDto);
  }

  @Get()
  findAll(): Promise<Municipality[]> {
    return this.municipalitiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Municipality> {
    return this.municipalitiesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMunicipalityDto: UpdateMunicipalityDto,
  ): Promise<Municipality> {
    return this.municipalitiesService.update(id, updateMunicipalityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Municipality> {
    return this.municipalitiesService.remove(id);
  }
}
