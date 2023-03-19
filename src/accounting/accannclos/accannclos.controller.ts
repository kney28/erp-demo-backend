import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AccannclosService } from './accannclos.service';
import { CreateAccanncloDto } from './dto/create-accannclo.dto';
import { UpdateAccanncloDto } from './dto/update-accannclo.dto';
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators';
import { ClassSerializerInterceptor } from '@nestjs/common/serializer';
import { Accannclo } from './entities/accannclo.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('accounting/accannclos')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
export class AccannclosController {
  constructor(private readonly accannclosService: AccannclosService) {}

  @Post()
  create(@Body() createAccanncloDto: CreateAccanncloDto): Promise<Accannclo> {
    return this.accannclosService.create(createAccanncloDto);
  }

  @Get()
  findAll(): Promise<Accannclo[]> {
    return this.accannclosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Accannclo> {
    return this.accannclosService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAccanncloDto: UpdateAccanncloDto,
  ): Promise<Accannclo> {
    return this.accannclosService.update(id, updateAccanncloDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Accannclo> {
    return this.accannclosService.remove(id);
  }
}
