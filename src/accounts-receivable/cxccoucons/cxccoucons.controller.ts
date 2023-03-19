import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CxccouconsService } from './cxccoucons.service';
import { CreateCxccouconDto } from './dto/create-cxccoucon.dto';
import { UpdateCxccouconDto } from './dto/update-cxccoucon.dto';
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators';
import { ClassSerializerInterceptor } from '@nestjs/common/serializer';
import { Cxccoucon } from './entities/cxccoucon.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('accounts-receivable/cxccoucons')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
export class CxccouconsController {
  constructor(private readonly cxccouconsService: CxccouconsService) {}

  @Post()
  create(@Body() createCxccouconDto: CreateCxccouconDto): Promise<Cxccoucon> {
    return this.cxccouconsService.create(createCxccouconDto);
  }

  @Get()
  findAll(): Promise<Cxccoucon[]> {
    return this.cxccouconsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Cxccoucon> {
    return this.cxccouconsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCxccouconDto: UpdateCxccouconDto,
  ): Promise<Cxccoucon> {
    return this.cxccouconsService.update(id, updateCxccouconDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Cxccoucon> {
    return this.cxccouconsService.remove(id);
  }
}
