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
import { DetailCopaysAndFeesService } from './detailcopaysAndFees.service';
import { CreateDetailCopaysAndFeeDto } from './dto/create-detailCopaysAndFee.dto';
import { UpdateDetailCopaysAndFeeDto } from './dto/update-detailCopaysAndFee.dto';
import { DetailCopaysAndFee } from './entities/detailCopaysAndFee.entity';

@Controller('detailcopaysandfees')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
export class DetailCopaysAndFeesController {
  constructor(
    private readonly detailCopaysAndFeesService: DetailCopaysAndFeesService,
  ) {}

  @Post()
  create(
    @Body() createDetailCopaysAndFeeDto: CreateDetailCopaysAndFeeDto,
  ): Promise<DetailCopaysAndFee> {
    return this.detailCopaysAndFeesService.create(createDetailCopaysAndFeeDto);
  }

  @Get()
  findAll(): Promise<DetailCopaysAndFee[]> {
    return this.detailCopaysAndFeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<DetailCopaysAndFee> {
    return this.detailCopaysAndFeesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDetailCopaysAndFeeDto: UpdateDetailCopaysAndFeeDto,
  ): Promise<DetailCopaysAndFee> {
    return this.detailCopaysAndFeesService.update(
      id,
      updateDetailCopaysAndFeeDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<DetailCopaysAndFee> {
    return this.detailCopaysAndFeesService.remove(id);
  }
}
