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
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { HealthProvidersService } from './healthproviders.service';
import { CreateHealthProviderDto } from './dto/create-healthprovider.dto';
import { UpdateHealthProviderDto } from './dto/update-healthprovider.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { HealthProvider } from './entities/healthprovider.entity';

@Controller('healthproviders')
@UseGuards(JwtAuthGuard)
@UseInterceptors(ClassSerializerInterceptor)
export class HealthProvidersController {
  constructor(
    private readonly healthProvidersService: HealthProvidersService,
  ) {}

  @Post()
  create(
    @Body() createHealthProviderDto: CreateHealthProviderDto,
  ): Promise<HealthProvider> {
    return this.healthProvidersService.create(createHealthProviderDto);
  }

  @Get()
  findAll(): Promise<HealthProvider[]> {
    return this.healthProvidersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<HealthProvider> {
    return this.healthProvidersService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHealthProviderDto: UpdateHealthProviderDto,
  ): Promise<HealthProvider> {
    return this.healthProvidersService.update(id, updateHealthProviderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<HealthProvider> {
    return this.healthProvidersService.remove(id);
  }
}
