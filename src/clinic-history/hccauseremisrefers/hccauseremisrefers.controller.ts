import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HccauseremisrefersService } from './hccauseremisrefers.service';
import { CreateHccauseremisreferDto } from './dto/create-hccauseremisrefer.dto';
import { UpdateHccauseremisreferDto } from './dto/update-hccauseremisrefer.dto';
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators';
import { ClassSerializerInterceptor } from '@nestjs/common/serializer';
import { Hccauseremisrefer } from './entities/hccauseremisrefer.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('clinic-history/hccauseremisrefers')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
export class HccauseremisrefersController {
  constructor(
    private readonly hccauseremisrefersService: HccauseremisrefersService,
  ) {}

  @Post()
  create(
    @Body() createHccauseremisreferDto: CreateHccauseremisreferDto,
  ): Promise<Hccauseremisrefer> {
    return this.hccauseremisrefersService.create(createHccauseremisreferDto);
  }

  @Get()
  findAll(): Promise<Hccauseremisrefer[]> {
    return this.hccauseremisrefersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Hccauseremisrefer> {
    return this.hccauseremisrefersService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHccauseremisreferDto: UpdateHccauseremisreferDto,
  ): Promise<Hccauseremisrefer> {
    return this.hccauseremisrefersService.update(
      id,
      updateHccauseremisreferDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Hccauseremisrefer> {
    return this.hccauseremisrefersService.remove(id);
  }
}
