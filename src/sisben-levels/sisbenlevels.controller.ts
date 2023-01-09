import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { SisbenLevelsService } from './sisbenlevels.service';
import { CreateSisbenLevelDto } from './dto/create-sisbenlevel.dto';
import { UpdateSisbenLevelDto } from './dto/update-sisbenlevel.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ClassSerializerInterceptor } from '@nestjs/common/serializer';
import { SisbenLevel } from './entities/sisbenlevel.entity';

@Controller('sisbenlevels')
@UseGuards(JwtAuthGuard)
@UseInterceptors(ClassSerializerInterceptor)
export class SisbenLevelsController {
  constructor(private readonly sisbenLevelsService: SisbenLevelsService) {}

  @Post()
  create(
    @Body() createSisbenLevelDto: CreateSisbenLevelDto,
  ): Promise<SisbenLevel> {
    return this.sisbenLevelsService.create(createSisbenLevelDto);
  }

  @Get()
  findAll(): Promise<SisbenLevel[]> {
    return this.sisbenLevelsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<SisbenLevel> {
    return this.sisbenLevelsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSisbenLevelDto: UpdateSisbenLevelDto,
  ): Promise<SisbenLevel> {
    return this.sisbenLevelsService.update(id, updateSisbenLevelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<SisbenLevel> {
    return this.sisbenLevelsService.remove(id);
  }
}
