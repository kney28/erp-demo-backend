import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CxpproviderssService } from './cxpproviderss.service';
import { CreateCxpprovidersDto } from './dto/create-cxpproviders.dto';
import { UpdateCxpprovidersDto } from './dto/update-cxpproviders.dto';
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators';
import { ClassSerializerInterceptor } from '@nestjs/common/serializer';
import { Cxpproviders } from './entities/cxpproviders.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('accounts-payable/cxpproviderss')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
export class CxpproviderssController {
  constructor(private readonly cxpproviderssService: CxpproviderssService) {}

  @Post()
  create(
    @Body() createCxpprovidersDto: CreateCxpprovidersDto,
  ): Promise<Cxpproviders> {
    return this.cxpproviderssService.create(createCxpprovidersDto);
  }

  @Get()
  findAll(): Promise<Cxpproviders[]> {
    return this.cxpproviderssService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Cxpproviders> {
    return this.cxpproviderssService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCxpprovidersDto: UpdateCxpprovidersDto,
  ): Promise<Cxpproviders> {
    return this.cxpproviderssService.update(id, updateCxpprovidersDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Cxpproviders> {
    return this.cxpproviderssService.remove(id);
  }
}
