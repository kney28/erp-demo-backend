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
import { MonthlyClosureService } from './monthlyclosure.service';
import { CreateMonthlyClosureDto } from './dto/create-monthlyclosure.dto';
import { UpdateMonthlyClosureDto } from './dto/update-monthlyclosure.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { MonthlyClosure } from './entities/monthlyclosure.entity';

@Controller('monthlyclosure')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
export class MonthlyClosureController {
  constructor(private readonly monthlyClosureService: MonthlyClosureService) {}

  @Post()
  create(
    @Body() createMonthlyClosureDto: CreateMonthlyClosureDto,
  ): Promise<MonthlyClosure> {
    return this.monthlyClosureService.create(createMonthlyClosureDto);
  }

  @Get()
  findAll(): Promise<MonthlyClosure[]> {
    return this.monthlyClosureService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<MonthlyClosure> {
    return this.monthlyClosureService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMonthlyClosureDto: UpdateMonthlyClosureDto,
  ): Promise<MonthlyClosure> {
    return this.monthlyClosureService.update(id, updateMonthlyClosureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<MonthlyClosure> {
    return this.monthlyClosureService.remove(id);
  }
}
