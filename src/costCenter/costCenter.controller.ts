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
import { CostCenterService } from './costcenter.service';
import { CreateCostCenterDto } from './dto/create-costcenter.dto';
import { UpdateCostCenterDto } from './dto/update-costcenter.dto';
import { CostCenter } from './entities/costcenter.entity';

@Controller('costcenter')
@UseInterceptors(ClassSerializerInterceptor)
export class CostCenterController {
  constructor(private readonly costCenterService: CostCenterService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(
    @Body() createCostCenterDto: CreateCostCenterDto,
  ): Promise<CostCenter> {
    return this.costCenterService.create(createCostCenterDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(): Promise<CostCenter[]> {
    return this.costCenterService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string): Promise<CostCenter> {
    return this.costCenterService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id') id: string,
    @Body() updateCostCenterDto: UpdateCostCenterDto,
  ): Promise<CostCenter> {
    return this.costCenterService.update(id, updateCostCenterDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string): Promise<CostCenter> {
    return this.costCenterService.remove(id);
  }
}
