import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InvmanufrolessService } from './invmanufroless.service';
import { CreateInvmanufrolesDto } from './dto/create-invmanufroles.dto';
import { UpdateInvmanufrolesDto } from './dto/update-invmanufroles.dto';
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators';
import { ClassSerializerInterceptor } from '@nestjs/common/serializer';
import { Invmanufroles } from './entities/invmanufroles.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('inventory/invmanufroless')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
export class InvmanufrolessController {
  constructor(private readonly invmanufrolessService: InvmanufrolessService) {}

  @Post()
  create(
    @Body() createInvmanufrolesDto: CreateInvmanufrolesDto,
  ): Promise<Invmanufroles> {
    return this.invmanufrolessService.create(createInvmanufrolesDto);
  }

  @Get()
  findAll(): Promise<Invmanufroles[]> {
    return this.invmanufrolessService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Invmanufroles> {
    return this.invmanufrolessService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInvmanufrolesDto: UpdateInvmanufrolesDto,
  ): Promise<Invmanufroles> {
    return this.invmanufrolessService.update(id, updateInvmanufrolesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Invmanufroles> {
    return this.invmanufrolessService.remove(id);
  }
}
