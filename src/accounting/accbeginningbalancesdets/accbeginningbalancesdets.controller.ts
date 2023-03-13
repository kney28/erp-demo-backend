import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AccbeginningbalancesdetsService } from './accbeginningbalancesdets.service';
import { CreateAccbeginningbalancesdetDto } from './dto/create-accbeginningbalancesdet.dto';
import { UpdateAccbeginningbalancesdetDto } from './dto/update-accbeginningbalancesdet.dto';
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators';
import { ClassSerializerInterceptor } from '@nestjs/common/serializer';
import { Accbeginningbalancesdet } from './entities/accbeginningbalancesdet.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('accounting/accbeginningbalancesdets')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
export class AccbeginningbalancesdetsController {
  constructor(
    private readonly accbeginningbalancesdetsService: AccbeginningbalancesdetsService,
  ) {}

  @Post()
  create(
    @Body() createAccbeginningbalancesdetDto: CreateAccbeginningbalancesdetDto,
  ): Promise<Accbeginningbalancesdet> {
    return this.accbeginningbalancesdetsService.create(
      createAccbeginningbalancesdetDto,
    );
  }

  @Get()
  findAll(): Promise<Accbeginningbalancesdet[]> {
    return this.accbeginningbalancesdetsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Accbeginningbalancesdet> {
    return this.accbeginningbalancesdetsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAccbeginningbalancesdetDto: UpdateAccbeginningbalancesdetDto,
  ): Promise<Accbeginningbalancesdet> {
    return this.accbeginningbalancesdetsService.update(
      id,
      updateAccbeginningbalancesdetDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Accbeginningbalancesdet> {
    return this.accbeginningbalancesdetsService.remove(id);
  }
}
