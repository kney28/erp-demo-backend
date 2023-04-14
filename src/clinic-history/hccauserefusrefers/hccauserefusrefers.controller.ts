import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HccauserefusrefersService } from './hccauserefusrefers.service';
import { CreateHccauserefusreferDto } from './dto/create-hccauserefusrefer.dto';
import { UpdateHccauserefusreferDto } from './dto/update-hccauserefusrefer.dto';
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators';
import { ClassSerializerInterceptor } from '@nestjs/common/serializer';
import { Hccauserefusrefer } from './entities/hccauserefusrefer.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('clinic-history/hccauserefusrefers')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
export class HccauserefusrefersController {
  constructor(
    private readonly hccauserefusrefersService: HccauserefusrefersService,
  ) {}

  @Post()
  create(
    @Body() createHccauserefusreferDto: CreateHccauserefusreferDto,
  ): Promise<Hccauserefusrefer> {
    return this.hccauserefusrefersService.create(createHccauserefusreferDto);
  }

  @Get()
  findAll(): Promise<Hccauserefusrefer[]> {
    return this.hccauserefusrefersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Hccauserefusrefer> {
    return this.hccauserefusrefersService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHccauserefusreferDto: UpdateHccauserefusreferDto,
  ): Promise<Hccauserefusrefer> {
    return this.hccauserefusrefersService.update(
      id,
      updateHccauserefusreferDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Hccauserefusrefer> {
    return this.hccauserefusrefersService.remove(id);
  }
}
