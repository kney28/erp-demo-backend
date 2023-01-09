import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OccupationsService } from './occupations.service';
import { CreateOccupationDto } from './dto/create-occupation.dto';
import { UpdateOccupationDto } from './dto/update-occupation.dto';
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators';
import { ClassSerializerInterceptor } from '@nestjs/common/serializer';
import { Occupation } from './entities/occupation.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('occupations')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
export class OccupationsController {
  constructor(private readonly occupationsService: OccupationsService) {}

  @Post()
  create(
    @Body() createOccupationDto: CreateOccupationDto,
  ): Promise<Occupation> {
    return this.occupationsService.create(createOccupationDto);
  }

  @Get()
  findAll(): Promise<Occupation[]> {
    return this.occupationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Occupation> {
    return this.occupationsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOccupationDto: UpdateOccupationDto,
  ): Promise<Occupation> {
    return this.occupationsService.update(id, updateOccupationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Occupation> {
    return this.occupationsService.remove(id);
  }
}
