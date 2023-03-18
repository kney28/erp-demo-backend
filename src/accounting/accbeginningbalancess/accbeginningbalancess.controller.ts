import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AccbeginningbalancessService } from './accbeginningbalancess.service';
import { CreateAccbeginningbalancesDto } from './dto/create-accbeginningbalances.dto';
import { UpdateAccbeginningbalancesDto } from './dto/update-accbeginningbalances.dto';
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators';
import { ClassSerializerInterceptor } from '@nestjs/common/serializer';
import { Accbeginningbalances } from './entities/accbeginningbalances.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('accounting/accbeginningbalancess')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
export class AccbeginningbalancessController {
  constructor(
    private readonly accbeginningbalancessService: AccbeginningbalancessService,
  ) {}

  @Post()
  create(
    @Body() createAccbeginningbalancesDto: CreateAccbeginningbalancesDto,
  ): Promise<Accbeginningbalances> {
    return this.accbeginningbalancessService.create(
      createAccbeginningbalancesDto,
    );
  }

  @Get()
  findAll(): Promise<Accbeginningbalances[]> {
    return this.accbeginningbalancessService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Accbeginningbalances> {
    return this.accbeginningbalancessService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAccbeginningbalancesDto: UpdateAccbeginningbalancesDto,
  ): Promise<Accbeginningbalances> {
    return this.accbeginningbalancessService.update(
      id,
      updateAccbeginningbalancesDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Accbeginningbalances> {
    return this.accbeginningbalancessService.remove(id);
  }
}
