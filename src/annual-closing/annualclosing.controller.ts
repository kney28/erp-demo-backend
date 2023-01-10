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
import { AnnualClosingService } from './annualclosing.service';
import { CreateAnnualClosingDto } from './dto/create-annualclosing.dto';
import { UpdateAnnualClosingDto } from './dto/update-annualclosing.dto';
import { AnnualClosing } from './entities/annualclosing.entity';

@Controller('annualclosing')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
export class AnnualClosingController {
  constructor(private readonly annualClosingService: AnnualClosingService) {}

  @Post()
  create(
    @Body() createAnnualClosingDto: CreateAnnualClosingDto,
  ): Promise<AnnualClosing> {
    return this.annualClosingService.create(createAnnualClosingDto);
  }

  @Get()
  findAll(): Promise<AnnualClosing[]> {
    return this.annualClosingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<AnnualClosing> {
    return this.annualClosingService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAnnualClosingDto: UpdateAnnualClosingDto,
  ): Promise<AnnualClosing> {
    return this.annualClosingService.update(id, updateAnnualClosingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<AnnualClosing> {
    return this.annualClosingService.remove(id);
  }
}
