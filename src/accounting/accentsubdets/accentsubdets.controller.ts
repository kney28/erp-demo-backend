import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AccentsubdetsService } from './accentsubdets.service';
import { CreateAccentsubdetDto } from './dto/create-accentsubdet.dto';
import { UpdateAccentsubdetDto } from './dto/update-accentsubdet.dto';
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators';
import { ClassSerializerInterceptor } from '@nestjs/common/serializer';
import { Accentsubdet } from './entities/accentsubdet.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('accounting/accentsubdets')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
export class AccentsubdetsController {
  constructor(private readonly accentsubdetsService: AccentsubdetsService) {}

  @Post()
  create(
    @Body() createAccentsubdetDto: CreateAccentsubdetDto,
  ): Promise<Accentsubdet> {
    return this.accentsubdetsService.create(createAccentsubdetDto);
  }

  @Get()
  findAll(): Promise<Accentsubdet[]> {
    return this.accentsubdetsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Accentsubdet> {
    return this.accentsubdetsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAccentsubdetDto: UpdateAccentsubdetDto,
  ): Promise<Accentsubdet> {
    return this.accentsubdetsService.update(id, updateAccentsubdetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Accentsubdet> {
    return this.accentsubdetsService.remove(id);
  }
}
