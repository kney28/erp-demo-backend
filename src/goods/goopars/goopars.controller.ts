import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GooparsService } from './goopars.service';
import { CreateGooparDto } from './dto/create-goopar.dto';
import { UpdateGooparDto } from './dto/update-goopar.dto';
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators';
import { ClassSerializerInterceptor } from '@nestjs/common/serializer';
import { Goopar } from './entities/goopar.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('goods/goopars')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
export class GooparsController {
  constructor(private readonly gooparsService: GooparsService) {}

  @Post()
  create(@Body() createGooparDto: CreateGooparDto): Promise<Goopar> {
    return this.gooparsService.create(createGooparDto);
  }

  @Get()
  findAll(): Promise<Goopar[]> {
    return this.gooparsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Goopar> {
    return this.gooparsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGooparDto: UpdateGooparDto,
  ): Promise<Goopar> {
    return this.gooparsService.update(id, updateGooparDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Goopar> {
    return this.gooparsService.remove(id);
  }
}
