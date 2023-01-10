import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PercentagesQxSoatDetailService } from './percentages-qx-soat-detail.service';
import { CreatePercentagesQxSoatDetailDto } from './dto/create-percentages-qx-soat-detail.dto';
import { UpdatePercentagesQxSoatDetailDto } from './dto/update-percentages-qx-soat-detail.dto';
import { PercentagesQxSoatDetail } from './entities/percentages-qx-soat-detail.entity';

@Controller('percentages-qx-soat-detail')
export class PercentagesQxSoatDetailController {
  constructor(
    private readonly percentagesQxSoatDetailService: PercentagesQxSoatDetailService,
  ) {}

  @Post()
  create(
    @Body() createPercentagesQxSoatDetailDto: CreatePercentagesQxSoatDetailDto,
  ): Promise<PercentagesQxSoatDetail> {
    return this.percentagesQxSoatDetailService.create(
      createPercentagesQxSoatDetailDto,
    );
  }

  @Get()
  findAll(): Promise<PercentagesQxSoatDetail[]> {
    return this.percentagesQxSoatDetailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<PercentagesQxSoatDetail> {
    return this.percentagesQxSoatDetailService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePercentagesQxSoatDetailDto: UpdatePercentagesQxSoatDetailDto,
  ): Promise<PercentagesQxSoatDetail> {
    return this.percentagesQxSoatDetailService.update(
      id,
      updatePercentagesQxSoatDetailDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<PercentagesQxSoatDetail> {
    return this.percentagesQxSoatDetailService.remove(id);
  }
}
