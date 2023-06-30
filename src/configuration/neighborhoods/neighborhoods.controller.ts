import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { NeighborhoodsService } from './neighborhoods.service';
import { CreateNeighborhoodDto } from './dto/create-neighborhood.dto';
import { UpdateNeighborhoodDto } from './dto/update-neighborhood.dto';
import { Neighborhood } from './entities/neighborhood.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
@UseGuards(JwtAuthGuard)
@Controller('configuration/neighborhoods')
@ApiTags('Barrios')
@ApiBearerAuth()
export class NeighborhoodsController {
  constructor(private readonly neighborhoodsService: NeighborhoodsService) {}

  @Post()
  create(@Body() createNeighborhoodDto: CreateNeighborhoodDto) {
    return this.neighborhoodsService.create(createNeighborhoodDto);
  }

  @Get()
  findAll(): Promise<Neighborhood[]> {
    return this.neighborhoodsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.neighborhoodsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateNeighborhoodDto: UpdateNeighborhoodDto,
  ) {
    return this.neighborhoodsService.update(id, updateNeighborhoodDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.neighborhoodsService.remove(id);
  }
}
