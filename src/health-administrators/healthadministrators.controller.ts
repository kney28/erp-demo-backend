import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  ClassSerializerInterceptor,
  UseGuards,
} from '@nestjs/common';
import { HealthAdministratorsService } from './healthadministrators.service';
import { CreateHealthAdministratorDto } from './dto/create-healthadministrator.dto';
import { UpdateHealthAdministratorDto } from './dto/update-healthadministrator.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { HealthAdministrator } from './entities/healthadministrator.entity';

@Controller('healthadministrators')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
export class HealthAdministratorsController {
  constructor(
    private readonly healthAdministratorsService: HealthAdministratorsService,
  ) {}

  @Post()
  create(
    @Body() createHealthAdministratorDto: CreateHealthAdministratorDto,
  ): Promise<HealthAdministrator> {
    return this.healthAdministratorsService.create(
      createHealthAdministratorDto,
    );
  }

  @Get()
  findAll(): Promise<HealthAdministrator[]> {
    return this.healthAdministratorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<HealthAdministrator> {
    return this.healthAdministratorsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHealthAdministratorDto: UpdateHealthAdministratorDto,
  ): Promise<HealthAdministrator> {
    return this.healthAdministratorsService.update(
      id,
      updateHealthAdministratorDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<HealthAdministrator> {
    return this.healthAdministratorsService.remove(id);
  }
}
