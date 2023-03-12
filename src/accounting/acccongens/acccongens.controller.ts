import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AcccongensService } from './acccongens.service';
import { CreateAcccongenDto } from './dto/create-acccongen.dto';
import { UpdateAcccongenDto } from './dto/update-acccongen.dto';
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators';
import { ClassSerializerInterceptor } from '@nestjs/common/serializer';
import { Acccongen } from './entities/acccongen.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('accounting/acccongens')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
export class AcccongensController {
  constructor(private readonly acccongensService: AcccongensService) {}

  @Post()
  create(@Body() createAcccongenDto: CreateAcccongenDto): Promise<Acccongen> {
    return this.acccongensService.create(createAcccongenDto);
  }

  @Get()
  findAll(): Promise<Acccongen[]> {
    return this.acccongensService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Acccongen> {
    return this.acccongensService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAcccongenDto: UpdateAcccongenDto,
  ): Promise<Acccongen> {
    return this.acccongensService.update(id, updateAcccongenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Acccongen> {
    return this.acccongensService.remove(id);
  }
}
