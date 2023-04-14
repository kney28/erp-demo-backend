import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HcvacunclasssService } from './hcvacunclasss.service';
import { CreateHcvacunclassDto } from './dto/create-hcvacunclass.dto';
import { UpdateHcvacunclassDto } from './dto/update-hcvacunclass.dto';
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators';
import { ClassSerializerInterceptor } from '@nestjs/common/serializer';
import { Hcvacunclass } from './entities/hcvacunclass.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('clinic-history/hcvacunclasss')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
export class HcvacunclasssController {
  constructor(private readonly hcvacunclasssService: HcvacunclasssService) {}

  @Post()
  create(
    @Body() createHcvacunclassDto: CreateHcvacunclassDto,
  ): Promise<Hcvacunclass> {
    return this.hcvacunclasssService.create(createHcvacunclassDto);
  }

  @Get()
  findAll(): Promise<Hcvacunclass[]> {
    return this.hcvacunclasssService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Hcvacunclass> {
    return this.hcvacunclasssService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHcvacunclassDto: UpdateHcvacunclassDto,
  ): Promise<Hcvacunclass> {
    return this.hcvacunclasssService.update(id, updateHcvacunclassDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Hcvacunclass> {
    return this.hcvacunclasssService.remove(id);
  }
}
