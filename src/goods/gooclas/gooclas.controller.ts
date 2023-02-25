import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GooclasService } from './gooclas.service';
import { CreateGooclaDto } from './dto/create-goocla.dto';
import { UpdateGooclaDto } from './dto/update-goocla.dto';
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators';
import { ClassSerializerInterceptor } from '@nestjs/common/serializer';
import { Goocla } from './entities/goocla.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('goods/gooclas')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
export class GooclasController {
  constructor(private readonly gooclasService: GooclasService) {}

  @Post()
  create(@Body() createGooclaDto: CreateGooclaDto): Promise<Goocla> {
    return this.gooclasService.create(createGooclaDto);
  }

  @Get()
  findAll(): Promise<Goocla[]> {
    return this.gooclasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Goocla> {
    return this.gooclasService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGooclaDto: UpdateGooclaDto,
  ): Promise<Goocla> {
    return this.gooclasService.update(id, updateGooclaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Goocla> {
    return this.gooclasService.remove(id);
  }
}
