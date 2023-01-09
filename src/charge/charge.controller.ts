import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators';
import { ClassSerializerInterceptor } from '@nestjs/common/serializer';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ChargeService } from './charge.service';
import { CreateChargeDto } from './dto/create-charge.dto';
import { UpdateChargeDto } from './dto/update-charge.dto';
import { Charge } from './entities/charge.entity';

@Controller('charge')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
export class ChargeController {
  constructor(private readonly chargeService: ChargeService) {}

  @Post()
  create(@Body() createChargeDto: CreateChargeDto): Promise<Charge> {
    return this.chargeService.create(createChargeDto);
  }

  @Get()
  findAll(): Promise<Charge[]> {
    return this.chargeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Charge> {
    return this.chargeService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateChargeDto: UpdateChargeDto,
  ): Promise<Charge> {
    return this.chargeService.update(id, updateChargeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Charge> {
    return this.chargeService.remove(id);
  }
}
