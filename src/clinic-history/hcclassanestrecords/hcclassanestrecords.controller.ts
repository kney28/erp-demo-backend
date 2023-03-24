import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HcclassanestrecordsService } from './hcclassanestrecords.service';
import { CreateHcclassanestrecordDto } from './dto/create-hcclassanestrecord.dto';
import { UpdateHcclassanestrecordDto } from './dto/update-hcclassanestrecord.dto';
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators';
import { ClassSerializerInterceptor } from '@nestjs/common/serializer';
import { Hcclassanestrecord } from './entities/hcclassanestrecord.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('clinic-history/hcclassanestrecords')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
export class HcclassanestrecordsController {
  constructor(
    private readonly hcclassanestrecordsService: HcclassanestrecordsService,
  ) {}

  @Post()
  create(
    @Body() createHcclassanestrecordDto: CreateHcclassanestrecordDto,
  ): Promise<Hcclassanestrecord> {
    return this.hcclassanestrecordsService.create(createHcclassanestrecordDto);
  }

  @Get()
  findAll(): Promise<Hcclassanestrecord[]> {
    return this.hcclassanestrecordsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Hcclassanestrecord> {
    return this.hcclassanestrecordsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHcclassanestrecordDto: UpdateHcclassanestrecordDto,
  ): Promise<Hcclassanestrecord> {
    return this.hcclassanestrecordsService.update(
      id,
      updateHcclassanestrecordDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Hcclassanestrecord> {
    return this.hcclassanestrecordsService.remove(id);
  }
}
