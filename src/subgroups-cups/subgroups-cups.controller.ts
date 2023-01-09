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
import { SubgroupsCupsService } from './subgroups-cups.service';
import { CreateSubgroupsCupDto } from './dto/create-subgroups-cup.dto';
import { UpdateSubgroupsCupDto } from './dto/update-subgroups-cup.dto';
import { SubgroupsCup } from './entities/subgroups-cup.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('subgroups-cups')
@UseGuards(JwtAuthGuard)
@ApiTags('Subgrupos CUPS')
@ApiBearerAuth()
export class SubgroupsCupsController {
  constructor(private readonly subgroupsCupsService: SubgroupsCupsService) {}

  @Post()
  create(
    @Body() createSubgroupsCupDto: CreateSubgroupsCupDto,
  ): Promise<SubgroupsCup> {
    return this.subgroupsCupsService.create(createSubgroupsCupDto);
  }

  @Get()
  findAll(): Promise<SubgroupsCup[]> {
    return this.subgroupsCupsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<SubgroupsCup> {
    return this.subgroupsCupsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSubgroupsCupDto: UpdateSubgroupsCupDto,
  ): Promise<SubgroupsCup> {
    return this.subgroupsCupsService.update(id, updateSubgroupsCupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<SubgroupsCup> {
    return this.subgroupsCupsService.remove(id);
  }
}
