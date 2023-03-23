import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PreconfigeneralsService } from './preconfigenerals.service';
import { CreatePreconfigeneralDto } from './dto/create-preconfigeneral.dto';
import { UpdatePreconfigeneralDto } from './dto/update-preconfigeneral.dto';
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators';
import { ClassSerializerInterceptor } from '@nestjs/common/serializer';
import { Preconfigeneral } from './entities/preconfigeneral.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('budget/preconfigenerals')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
export class PreconfigeneralsController {
  constructor(
    private readonly preconfigeneralsService: PreconfigeneralsService,
  ) {}

  @Post()
  create(
    @Body() createPreconfigeneralDto: CreatePreconfigeneralDto,
  ): Promise<Preconfigeneral> {
    return this.preconfigeneralsService.create(createPreconfigeneralDto);
  }

  @Get()
  findAll(): Promise<Preconfigeneral[]> {
    return this.preconfigeneralsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Preconfigeneral> {
    return this.preconfigeneralsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePreconfigeneralDto: UpdatePreconfigeneralDto,
  ): Promise<Preconfigeneral> {
    return this.preconfigeneralsService.update(id, updatePreconfigeneralDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Preconfigeneral> {
    return this.preconfigeneralsService.remove(id);
  }
}
