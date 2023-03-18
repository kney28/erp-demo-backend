import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GooconfsService } from './gooconfs.service';
import { CreateGooconfDto } from './dto/create-gooconf.dto';
import { UpdateGooconfDto } from './dto/update-gooconf.dto';
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators';
import { ClassSerializerInterceptor } from '@nestjs/common/serializer';
import { Gooconf } from './entities/gooconf.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('goods/gooconfs')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
export class GooconfsController {
  constructor(private readonly gooconfsService: GooconfsService) {}

  @Post()
  create(@Body() createGooconfDto: CreateGooconfDto): Promise<Gooconf> {
    return this.gooconfsService.create(createGooconfDto);
  }

  @Get()
  findAll(): Promise<Gooconf[]> {
    return this.gooconfsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Gooconf> {
    return this.gooconfsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGooconfDto: UpdateGooconfDto,
  ): Promise<Gooconf> {
    return this.gooconfsService.update(id, updateGooconfDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Gooconf> {
    return this.gooconfsService.remove(id);
  }
}
