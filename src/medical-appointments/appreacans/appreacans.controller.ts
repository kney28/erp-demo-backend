import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AppreacansService } from './appreacans.service';
import { CreateAppreacanDto } from './dto/create-appreacan.dto';
import { UpdateAppreacanDto } from './dto/update-appreacan.dto';
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators';
import { ClassSerializerInterceptor } from '@nestjs/common/serializer';
import { Appreacan } from './entities/appreacan.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('medical-appointments/appreacans')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
export class AppreacansController {
  constructor(private readonly appreacansService: AppreacansService) {}

  @Post()
  create(@Body() createAppreacanDto: CreateAppreacanDto): Promise<Appreacan> {
    return this.appreacansService.create(createAppreacanDto);
  }

  @Get()
  findAll(): Promise<Appreacan[]> {
    return this.appreacansService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Appreacan> {
    return this.appreacansService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAppreacanDto: UpdateAppreacanDto,
  ): Promise<Appreacan> {
    return this.appreacansService.update(id, updateAppreacanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Appreacan> {
    return this.appreacansService.remove(id);
  }
}
