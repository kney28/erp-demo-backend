import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AccannualclosingentrysService } from './accannualclosingentrys.service';
import { CreateAccannualclosingentryDto } from './dto/create-accannualclosingentry.dto';
import { UpdateAccannualclosingentryDto } from './dto/update-accannualclosingentry.dto';
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators';
import { ClassSerializerInterceptor } from '@nestjs/common/serializer';
import { Accannualclosingentry } from './entities/accannualclosingentry.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('accounting/accannualclosingentrys')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
export class AccannualclosingentrysController {
  constructor(
    private readonly accannualclosingentrysService: AccannualclosingentrysService,
  ) {}

  @Post()
  create(
    @Body() createAccannualclosingentryDto: CreateAccannualclosingentryDto,
  ): Promise<Accannualclosingentry> {
    return this.accannualclosingentrysService.create(
      createAccannualclosingentryDto,
    );
  }

  @Get()
  findAll(): Promise<Accannualclosingentry[]> {
    return this.accannualclosingentrysService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Accannualclosingentry> {
    return this.accannualclosingentrysService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAccannualclosingentryDto: UpdateAccannualclosingentryDto,
  ): Promise<Accannualclosingentry> {
    return this.accannualclosingentrysService.update(
      id,
      updateAccannualclosingentryDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Accannualclosingentry> {
    return this.accannualclosingentrysService.remove(id);
  }
}
