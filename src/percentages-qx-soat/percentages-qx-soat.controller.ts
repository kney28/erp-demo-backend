import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PercentagesQxSoatService } from './percentages-qx-soat.service';
import { CreatePercentagesQxSoatDto } from './dto/create-percentages-qx-soat.dto';
import { UpdatePercentagesQxSoatDto } from './dto/update-percentages-qx-soat.dto';
import { PercentagesQxSoat } from './entities/percentages-qx-soat.entity';

@Controller('percentages-qx-soat')
export class PercentagesQxSoatController {
  constructor(
    private readonly percentagesQxSoatService: PercentagesQxSoatService,
  ) {}

  @Post()
  create(
    @Body() createPercentagesQxSoatDto: CreatePercentagesQxSoatDto,
  ): Promise<PercentagesQxSoat> {
    return this.percentagesQxSoatService.create(createPercentagesQxSoatDto);
  }

  @Get()
  findAll(): Promise<PercentagesQxSoat[]> {
    return this.percentagesQxSoatService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<PercentagesQxSoat> {
    return this.percentagesQxSoatService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePercentagesQxSoatDto: UpdatePercentagesQxSoatDto,
  ): Promise<PercentagesQxSoat> {
    return this.percentagesQxSoatService.update(id, updatePercentagesQxSoatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<PercentagesQxSoat> {
    return this.percentagesQxSoatService.remove(id);
  }
}
