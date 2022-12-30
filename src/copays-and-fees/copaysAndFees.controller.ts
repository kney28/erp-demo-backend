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
import { CopaysAndFeesService } from './copaysandfees.service';
import { CreateCopaysAndFeesDto } from './dto/create-copaysAndFees.dto';
import { UpdateCopaysAndFeeDto } from './dto/update-copaysAndFees.dto';
import { CopaysAndFee } from './entities/copaysAndFee.entity';

@Controller('copaysandfees')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
export class CopaysAndFeesController {
  constructor(private readonly copaysAndFeesService: CopaysAndFeesService) {}

  @Post()
  create(
    @Body() createCopaysAndFeeDto: CreateCopaysAndFeesDto,
  ): Promise<CopaysAndFee> {
    return this.copaysAndFeesService.create(createCopaysAndFeeDto);
  }

  @Get()
  findAll(): Promise<CopaysAndFee[]> {
    return this.copaysAndFeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<CopaysAndFee> {
    return this.copaysAndFeesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCopaysAndFeeDto: UpdateCopaysAndFeeDto,
  ): Promise<CopaysAndFee> {
    return this.copaysAndFeesService.update(id, updateCopaysAndFeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<CopaysAndFee> {
    return this.copaysAndFeesService.remove(id);
  }
}
