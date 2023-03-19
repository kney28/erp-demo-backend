import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AppofficessService } from './appofficess.service';
import { CreateAppofficesDto } from './dto/create-appoffices.dto';
import { UpdateAppofficesDto } from './dto/update-appoffices.dto';
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators';
import { ClassSerializerInterceptor } from '@nestjs/common/serializer';
import { Appoffices } from './entities/appoffices.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('medical-appointments/appofficess')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
export class AppofficessController {
  constructor(private readonly appofficessService: AppofficessService) {}

  @Post()
  create(
    @Body() createAppofficesDto: CreateAppofficesDto,
  ): Promise<Appoffices> {
    return this.appofficessService.create(createAppofficesDto);
  }

  @Get()
  findAll(): Promise<Appoffices[]> {
    return this.appofficessService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Appoffices> {
    return this.appofficessService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAppofficesDto: UpdateAppofficesDto,
  ): Promise<Appoffices> {
    return this.appofficessService.update(id, updateAppofficesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Appoffices> {
    return this.appofficessService.remove(id);
  }
}
