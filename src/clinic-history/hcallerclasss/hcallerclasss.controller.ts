import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HcallerclasssService } from './hcallerclasss.service';
import { CreateHcallerclassDto } from './dto/create-hcallerclass.dto';
import { UpdateHcallerclassDto } from './dto/update-hcallerclass.dto';
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators';
import { ClassSerializerInterceptor } from '@nestjs/common/serializer';
import { Hcallerclass } from './entities/hcallerclass.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('clinic-history/hcallerclasss')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
export class HcallerclasssController {
  constructor(private readonly hcallerclasssService: HcallerclasssService) {}

  @Post()
  create(
    @Body() createHcallerclassDto: CreateHcallerclassDto,
  ): Promise<Hcallerclass> {
    return this.hcallerclasssService.create(createHcallerclassDto);
  }

  @Get()
  findAll(): Promise<Hcallerclass[]> {
    return this.hcallerclasssService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Hcallerclass> {
    return this.hcallerclasssService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHcallerclassDto: UpdateHcallerclassDto,
  ): Promise<Hcallerclass> {
    return this.hcallerclasssService.update(id, updateHcallerclassDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Hcallerclass> {
    return this.hcallerclasssService.remove(id);
  }
}
