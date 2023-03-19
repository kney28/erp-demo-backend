import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AccbalmovsService } from './accbalmovs.service';
import { CreateAccbalmovDto } from './dto/create-accbalmov.dto';
import { UpdateAccbalmovDto } from './dto/update-accbalmov.dto';
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators';
import { ClassSerializerInterceptor } from '@nestjs/common/serializer';
import { Accbalmov } from './entities/accbalmov.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('accbalmovs')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
export class AccbalmovsController {
  constructor(private readonly accbalmovsService: AccbalmovsService) {}

  @Post()
  create(@Body() createAccbalmovDto: CreateAccbalmovDto): Promise<Accbalmov> {
    return this.accbalmovsService.create(createAccbalmovDto);
  }

  @Get()
  findAll(): Promise<Accbalmov[]> {
    return this.accbalmovsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Accbalmov> {
    return this.accbalmovsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAccbalmovDto: UpdateAccbalmovDto,
  ): Promise<Accbalmov> {
    return this.accbalmovsService.update(id, updateAccbalmovDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Accbalmov> {
    return this.accbalmovsService.remove(id);
  }
}
