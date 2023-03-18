import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AccmonclosService } from './accmonclos.service';
import { CreateAccmoncloDto } from './dto/create-accmonclo.dto';
import { UpdateAccmoncloDto } from './dto/update-accmonclo.dto';
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators';
import { ClassSerializerInterceptor } from '@nestjs/common/serializer';
import { Accmonclo } from './entities/accmonclo.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('accounting/accmonclos')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
export class AccmonclosController {
  constructor(private readonly accmonclosService: AccmonclosService) {}

  @Post()
  create(@Body() createAccmoncloDto: CreateAccmoncloDto): Promise<Accmonclo> {
    return this.accmonclosService.create(createAccmoncloDto);
  }

  @Get()
  findAll(): Promise<Accmonclo[]> {
    return this.accmonclosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Accmonclo> {
    return this.accmonclosService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAccmoncloDto: UpdateAccmoncloDto,
  ): Promise<Accmonclo> {
    return this.accmonclosService.update(id, updateAccmoncloDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Accmonclo> {
    return this.accmonclosService.remove(id);
  }
}
