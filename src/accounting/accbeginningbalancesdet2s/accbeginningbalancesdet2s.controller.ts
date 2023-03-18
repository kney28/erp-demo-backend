import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Accbeginningbalancesdet2sService } from './accbeginningbalancesdet2s.service';
import { CreateAccbeginningbalancesdet2Dto } from './dto/create-accbeginningbalancesdet2.dto';
import { UpdateAccbeginningbalancesdet2Dto } from './dto/update-accbeginningbalancesdet2.dto';
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators';
import { ClassSerializerInterceptor } from '@nestjs/common/serializer';
import { Accbeginningbalancesdet2 } from './entities/accbeginningbalancesdet2.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('accounting/accbeginningbalancesdet2s')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
export class Accbeginningbalancesdet2sController {
  constructor(
    private readonly accbeginningbalancesdet2sService: Accbeginningbalancesdet2sService,
  ) {}

  @Post()
  create(
    @Body()
    createAccbeginningbalancesdet2Dto: CreateAccbeginningbalancesdet2Dto,
  ): Promise<Accbeginningbalancesdet2> {
    return this.accbeginningbalancesdet2sService.create(
      createAccbeginningbalancesdet2Dto,
    );
  }

  @Get()
  findAll(): Promise<Accbeginningbalancesdet2[]> {
    return this.accbeginningbalancesdet2sService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Accbeginningbalancesdet2> {
    return this.accbeginningbalancesdet2sService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    updateAccbeginningbalancesdet2Dto: UpdateAccbeginningbalancesdet2Dto,
  ): Promise<Accbeginningbalancesdet2> {
    return this.accbeginningbalancesdet2sService.update(
      id,
      updateAccbeginningbalancesdet2Dto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Accbeginningbalancesdet2> {
    return this.accbeginningbalancesdet2sService.remove(id);
  }
}
