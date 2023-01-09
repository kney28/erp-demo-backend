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
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AnnualClosingSeatService } from './annualclosingseat.service';
import { CreateAnnualClosingSeatDto } from './dto/create-annualclosingseat.dto';
import { UpdateAnnualClosingSeatDto } from './dto/update-annualclosingseat.dto';
import { AnnualClosingSeat } from './entities/annualclosingseat.entity';

@Controller('annualclosingseat')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
export class AnnualClosingSeatController {
  constructor(
    private readonly annualClosingSeatService: AnnualClosingSeatService,
  ) {}

  @Post()
  create(
    @Body() createAnnualClosingSeatDto: CreateAnnualClosingSeatDto,
  ): Promise<AnnualClosingSeat> {
    return this.annualClosingSeatService.create(createAnnualClosingSeatDto);
  }

  @Get()
  findAll(): Promise<AnnualClosingSeat[]> {
    return this.annualClosingSeatService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<AnnualClosingSeat> {
    return this.annualClosingSeatService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAnnualClosingSeatDto: UpdateAnnualClosingSeatDto,
  ): Promise<AnnualClosingSeat> {
    return this.annualClosingSeatService.update(id, updateAnnualClosingSeatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<AnnualClosingSeat> {
    return this.annualClosingSeatService.remove(id);
  }
}
