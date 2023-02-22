import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HcdignosessService } from './hcdignosess.service';
import { CreateHcdignosesDto } from './dto/create-hcdignoses.dto';
import { UpdateHcdignosesDto } from './dto/update-hcdignoses.dto';
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators';
import { ClassSerializerInterceptor } from '@nestjs/common/serializer';
import { Hcdignoses } from './entities/hcdignoses.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('clinict-history/hcdignosess')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
export class HcdignosessController {
  constructor(private readonly hcdignosessService: HcdignosessService) {}

  @Post()
  create(
    @Body() createHcdignosesDto: CreateHcdignosesDto,
  ): Promise<Hcdignoses> {
    return this.hcdignosessService.create(createHcdignosesDto);
  }

  @Get()
  findAll(): Promise<Hcdignoses[]> {
    return this.hcdignosessService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Hcdignoses> {
    return this.hcdignosessService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHcdignosesDto: UpdateHcdignosesDto,
  ): Promise<Hcdignoses> {
    return this.hcdignosessService.update(id, updateHcdignosesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Hcdignoses> {
    return this.hcdignosessService.remove(id);
  }
}
