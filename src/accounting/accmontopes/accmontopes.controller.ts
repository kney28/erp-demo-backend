import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AccmontopesService } from './accmontopes.service';
import { CreateAccmontopeDto } from './dto/create-accmontope.dto';
import { UpdateAccmontopeDto } from './dto/update-accmontope.dto';
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators';
import { ClassSerializerInterceptor } from '@nestjs/common/serializer';
import { Accmontope } from './entities/accmontope.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('accounting/accmontopes')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
export class AccmontopesController {
  constructor(private readonly accmontopesService: AccmontopesService) {}

  @Post()
  create(
    @Body() createAccmontopeDto: CreateAccmontopeDto,
  ): Promise<Accmontope> {
    return this.accmontopesService.create(createAccmontopeDto);
  }

  @Get()
  findAll(): Promise<Accmontope[]> {
    return this.accmontopesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Accmontope> {
    return this.accmontopesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAccmontopeDto: UpdateAccmontopeDto,
  ): Promise<Accmontope> {
    return this.accmontopesService.update(id, updateAccmontopeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Accmontope> {
    return this.accmontopesService.remove(id);
  }
}
