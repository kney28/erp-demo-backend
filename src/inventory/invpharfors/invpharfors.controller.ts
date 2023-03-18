import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InvpharforsService } from './invpharfors.service';
import { CreateInvpharforDto } from './dto/create-invpharfor.dto';
import { UpdateInvpharforDto } from './dto/update-invpharfor.dto';
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators';
import { ClassSerializerInterceptor } from '@nestjs/common/serializer';
import { Invpharfor } from './entities/invpharfor.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('inventory/invpharfors')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
export class InvpharforsController {
  constructor(private readonly invpharforsService: InvpharforsService) {}

  @Post()
  create(
    @Body() createInvpharforDto: CreateInvpharforDto,
  ): Promise<Invpharfor> {
    return this.invpharforsService.create(createInvpharforDto);
  }

  @Get()
  findAll(): Promise<Invpharfor[]> {
    return this.invpharforsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Invpharfor> {
    return this.invpharforsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInvpharforDto: UpdateInvpharforDto,
  ): Promise<Invpharfor> {
    return this.invpharforsService.update(id, updateInvpharforDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Invpharfor> {
    return this.invpharforsService.remove(id);
  }
}
