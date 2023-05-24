import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HcvadsispromipressService } from './hcvadsispromipress.service';
import { CreateHcvadsispromipresDto } from './dto/create-hcvadsispromipres.dto';
import { UpdateHcvadsispromipresDto } from './dto/update-hcvadsispromipres.dto';
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators';
import { ClassSerializerInterceptor } from '@nestjs/common/serializer';
import { Hcvadsispromipres } from './entities/hcvadsispromipres.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('clinic-history/hcvadsispromipress')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
export class HcvadsispromipressController {
  constructor(
    private readonly hcvadsispromipressService: HcvadsispromipressService,
  ) {}

  @Post()
  create(
    @Body() createHcvadsispromipresDto: CreateHcvadsispromipresDto,
  ): Promise<Hcvadsispromipres> {
    return this.hcvadsispromipressService.create(createHcvadsispromipresDto);
  }

  @Get()
  findAll(): Promise<Hcvadsispromipres[]> {
    return this.hcvadsispromipressService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Hcvadsispromipres> {
    return this.hcvadsispromipressService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHcvadsispromipresDto: UpdateHcvadsispromipresDto,
  ): Promise<Hcvadsispromipres> {
    return this.hcvadsispromipressService.update(
      id,
      updateHcvadsispromipresDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Hcvadsispromipres> {
    return this.hcvadsispromipressService.remove(id);
  }
}
