import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InvcumsService } from './invcums.service';
import { CreateInvcumDto } from './dto/create-invcum.dto';
import { UpdateInvcumDto } from './dto/update-invcum.dto';
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators';
import { ClassSerializerInterceptor } from '@nestjs/common/serializer';
import { Invcum } from './entities/invcum.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('inventory/invcums')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
export class InvcumsController {
  constructor(private readonly invcumsService: InvcumsService) {}

  @Post()
  create(@Body() createInvcumDto: CreateInvcumDto): Promise<Invcum> {
    return this.invcumsService.create(createInvcumDto);
  }

  @Get()
  findAll(): Promise<Invcum[]> {
    return this.invcumsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Invcum> {
    return this.invcumsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInvcumDto: UpdateInvcumDto,
  ): Promise<Invcum> {
    return this.invcumsService.update(id, updateInvcumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Invcum> {
    return this.invcumsService.remove(id);
  }
}
