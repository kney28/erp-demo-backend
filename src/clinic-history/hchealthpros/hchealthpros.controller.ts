import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HchealthprosService } from './hchealthpros.service';
import { CreateHchealthproDto } from './dto/create-hchealthpro.dto';
import { UpdateHchealthproDto } from './dto/update-hchealthpro.dto';
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators';
import { ClassSerializerInterceptor } from '@nestjs/common/serializer';
import { Hchealthpro } from './entities/hchealthpro.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('clinict-history/hchealthpros')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
export class HchealthprosController {
  constructor(private readonly hchealthprosService: HchealthprosService) {}

  @Post()
  create(
    @Body() createHchealthproDto: CreateHchealthproDto,
  ): Promise<Hchealthpro> {
    return this.hchealthprosService.create(createHchealthproDto);
  }

  @Get()
  findAll(): Promise<Hchealthpro[]> {
    return this.hchealthprosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Hchealthpro> {
    return this.hchealthprosService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHchealthproDto: UpdateHchealthproDto,
  ): Promise<Hchealthpro> {
    return this.hchealthprosService.update(id, updateHchealthproDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Hchealthpro> {
    return this.hchealthprosService.remove(id);
  }
}
