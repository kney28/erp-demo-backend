import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InvunitsmeasService } from './invunitsmeas.service';
import { CreateInvunitsmeaDto } from './dto/create-invunitsmea.dto';
import { UpdateInvunitsmeaDto } from './dto/update-invunitsmea.dto';
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators';
import { ClassSerializerInterceptor } from '@nestjs/common/serializer';
import { Invunitsmea } from './entities/invunitsmea.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('inventory/invunitsmeas')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
export class InvunitsmeasController {
  constructor(private readonly invunitsmeasService: InvunitsmeasService) {}

  @Post()
  create(
    @Body() createInvunitsmeaDto: CreateInvunitsmeaDto,
  ): Promise<Invunitsmea> {
    return this.invunitsmeasService.create(createInvunitsmeaDto);
  }

  @Get()
  findAll(): Promise<Invunitsmea[]> {
    return this.invunitsmeasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Invunitsmea> {
    return this.invunitsmeasService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInvunitsmeaDto: UpdateInvunitsmeaDto,
  ): Promise<Invunitsmea> {
    return this.invunitsmeasService.update(id, updateInvunitsmeaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Invunitsmea> {
    return this.invunitsmeasService.remove(id);
  }
}
