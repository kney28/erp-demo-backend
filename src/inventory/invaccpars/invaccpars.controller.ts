import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InvaccparsService } from './invaccpars.service';
import { CreateInvaccparDto } from './dto/create-invaccpar.dto';
import { UpdateInvaccparDto } from './dto/update-invaccpar.dto';
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators';
import { ClassSerializerInterceptor } from '@nestjs/common/serializer';
import { Invaccpar } from './entities/invaccpar.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('inventory/invaccpars')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
export class InvaccparsController {
  constructor(private readonly invaccparsService: InvaccparsService) {}

  @Post()
  create(@Body() createInvaccparDto: CreateInvaccparDto): Promise<Invaccpar> {
    return this.invaccparsService.create(createInvaccparDto);
  }

  @Get()
  findAll(): Promise<Invaccpar[]> {
    return this.invaccparsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Invaccpar> {
    return this.invaccparsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInvaccparDto: UpdateInvaccparDto,
  ): Promise<Invaccpar> {
    return this.invaccparsService.update(id, updateInvaccparDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Invaccpar> {
    return this.invaccparsService.remove(id);
  }
}
