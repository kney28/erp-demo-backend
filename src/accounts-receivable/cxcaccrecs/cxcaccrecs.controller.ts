import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CxcaccrecsService } from './cxcaccrecs.service';
import { CreateCxcaccrecDto } from './dto/create-cxcaccrec.dto';
import { UpdateCxcaccrecDto } from './dto/update-cxcaccrec.dto';
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators';
import { ClassSerializerInterceptor } from '@nestjs/common/serializer';
import { Cxcaccrec } from './entities/cxcaccrec.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('accounts-receivable/cxcaccrecs')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
export class CxcaccrecsController {
  constructor(private readonly cxcaccrecsService: CxcaccrecsService) {}

  @Post()
  create(@Body() createCxcaccrecDto: CreateCxcaccrecDto): Promise<Cxcaccrec> {
    return this.cxcaccrecsService.create(createCxcaccrecDto);
  }

  @Get()
  findAll(): Promise<Cxcaccrec[]> {
    return this.cxcaccrecsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Cxcaccrec> {
    return this.cxcaccrecsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCxcaccrecDto: UpdateCxcaccrecDto,
  ): Promise<Cxcaccrec> {
    return this.cxcaccrecsService.update(id, updateCxcaccrecDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Cxcaccrec> {
    return this.cxcaccrecsService.remove(id);
  }
}
