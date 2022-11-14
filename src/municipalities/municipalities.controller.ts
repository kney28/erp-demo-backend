import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
  UseGuards,
} from '@nestjs/common';
import { MunicipalitiesService } from './municipalities.service';
import { CreateMunicipalityDto } from './dto/create-municipality.dto';
import { UpdateMunicipalityDto } from './dto/update-municipality.dto';
import { DepartmentsService } from 'src/departments/departments.service';
import { Municipality } from './entities/municipality.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Department } from 'src/departments/entities/department.entity';
@UseGuards(JwtAuthGuard)
@Controller('municipalities')
export class MunicipalitiesController {
  constructor(
    private readonly municipalitiesService: MunicipalitiesService,
    private readonly departmentsService: DepartmentsService,
  ) {}

  @Post()
  async create(
    @Body() createMunicipalityDto: CreateMunicipalityDto,
  ): Promise<Municipality> {
    if (createMunicipalityDto['department']) {
      const department: Department = await this.departmentsService.findOne(
        String(createMunicipalityDto['department']),
      );

      if (!department) {
        throw new BadRequestException(
          'No se encontró información del departamento',
        );
      }

      createMunicipalityDto[
        'code'
      ] = `${department.codigo}${createMunicipalityDto['subcode']}`;
    }

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
