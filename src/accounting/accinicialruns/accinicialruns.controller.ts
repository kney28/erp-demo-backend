import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AccinicialrunsService } from './accinicialruns.service';
import { CreateAccinicialrunDto } from './dto/create-accinicialrun.dto';
import { UpdateAccinicialrunDto } from './dto/update-accinicialrun.dto';
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators';
import { ClassSerializerInterceptor } from '@nestjs/common/serializer';
import { Accinicialrun } from './entities/accinicialrun.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('accounting/accinicialruns')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
export class AccinicialrunsController {
  constructor(private readonly accinicialrunsService: AccinicialrunsService) {}

  @Post()
  create(
    @Body() createAccinicialrunDto: CreateAccinicialrunDto,
  ): Promise<Accinicialrun> {
    return this.accinicialrunsService.create(createAccinicialrunDto);
  }

  @Get()
  findAll(): Promise<Accinicialrun[]> {
    return this.accinicialrunsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Accinicialrun> {
    return this.accinicialrunsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAccinicialrunDto: UpdateAccinicialrunDto,
  ): Promise<Accinicialrun> {
    return this.accinicialrunsService.update(id, updateAccinicialrunDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Accinicialrun> {
    return this.accinicialrunsService.remove(id);
  }
}
