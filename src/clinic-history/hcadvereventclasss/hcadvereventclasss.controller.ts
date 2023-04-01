import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HcadvereventclasssService } from './hcadvereventclasss.service';
import { CreateHcadvereventclassDto } from './dto/create-hcadvereventclass.dto';
import { UpdateHcadvereventclassDto } from './dto/update-hcadvereventclass.dto';
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators';
import { ClassSerializerInterceptor } from '@nestjs/common/serializer';
import { Hcadvereventclass } from './entities/hcadvereventclass.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('clinic-history/hcadvereventclasss')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
export class HcadvereventclasssController {
  constructor(
    private readonly hcadvereventclasssService: HcadvereventclasssService,
  ) {}

  @Post()
  create(
    @Body() createHcadvereventclassDto: CreateHcadvereventclassDto,
  ): Promise<Hcadvereventclass> {
    return this.hcadvereventclasssService.create(createHcadvereventclassDto);
  }

  @Get()
  findAll(): Promise<Hcadvereventclass[]> {
    return this.hcadvereventclasssService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Hcadvereventclass> {
    return this.hcadvereventclasssService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHcadvereventclassDto: UpdateHcadvereventclassDto,
  ): Promise<Hcadvereventclass> {
    return this.hcadvereventclasssService.update(
      id,
      updateHcadvereventclassDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Hcadvereventclass> {
    return this.hcadvereventclasssService.remove(id);
  }
}
