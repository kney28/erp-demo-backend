import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CxpcouconsService } from './cxpcoucons.service';
import { CreateCxpcouconDto } from './dto/create-cxpcoucon.dto';
import { UpdateCxpcouconDto } from './dto/update-cxpcoucon.dto';
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators';
import { ClassSerializerInterceptor } from '@nestjs/common/serializer';
import { Cxpcoucon } from './entities/cxpcoucon.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('accounts-payable/cxpcoucons')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
export class CxpcouconsController {
  constructor(private readonly cxpcouconsService: CxpcouconsService) {}

  @Post()
  create(@Body() createCxpcouconDto: CreateCxpcouconDto): Promise<Cxpcoucon> {
    return this.cxpcouconsService.create(createCxpcouconDto);
  }

  @Get()
  findAll(): Promise<Cxpcoucon[]> {
    return this.cxpcouconsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Cxpcoucon> {
    return this.cxpcouconsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCxpcouconDto: UpdateCxpcouconDto,
  ): Promise<Cxpcoucon> {
    return this.cxpcouconsService.update(id, updateCxpcouconDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Cxpcoucon> {
    return this.cxpcouconsService.remove(id);
  }
}
