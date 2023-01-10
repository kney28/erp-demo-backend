import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  ClassSerializerInterceptor,
  UseGuards,
} from '@nestjs/common';
import { MonthlyOpeningService } from './monthlyopening.service';
import { CreateMonthlyOpeningDto } from './dto/create-monthlyopening.dto';
import { UpdateMonthlyOpeningDto } from './dto/update-monthlyopening.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { MonthlyOpening } from './entities/monthlyopening.entity';

@Controller('monthlyopening')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
export class MonthlyOpeningController {
  constructor(private readonly monthlyOpeningService: MonthlyOpeningService) {}

  @Post()
  create(
    @Body() createMonthlyOpeningDto: CreateMonthlyOpeningDto,
  ): Promise<MonthlyOpening> {
    return this.monthlyOpeningService.create(createMonthlyOpeningDto);
  }

  @Get()
  findAll(): Promise<MonthlyOpening[]> {
    return this.monthlyOpeningService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<MonthlyOpening> {
    return this.monthlyOpeningService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMonthlyOpeningDto: UpdateMonthlyOpeningDto,
  ): Promise<MonthlyOpening> {
    return this.monthlyOpeningService.update(id, updateMonthlyOpeningDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<MonthlyOpening> {
    return this.monthlyOpeningService.remove(id);
  }
}
