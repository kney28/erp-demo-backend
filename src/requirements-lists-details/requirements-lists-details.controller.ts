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
import { RequirementsListsDetailsService } from './requirements-lists-details.service';
import { CreateRequirementsListsDetailDto } from './dto/create-requirements-lists-detail.dto';
import { UpdateRequirementsListsDetailDto } from './dto/update-requirements-lists-detail.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('Detalle listados de requisitos')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('requirements-lists-details')
export class RequirementsListsDetailsController {
  constructor(
    private readonly requirementsListsDetailsService: RequirementsListsDetailsService,
  ) {}

  @Post()
  create(
    @Body() createRequirementsListsDetailDto: CreateRequirementsListsDetailDto,
  ) {
    return this.requirementsListsDetailsService.create(
      createRequirementsListsDetailDto,
    );
  }

  @Get()
  findAll() {
    return this.requirementsListsDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.requirementsListsDetailsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRequirementsListsDetailDto: UpdateRequirementsListsDetailDto,
  ) {
    return this.requirementsListsDetailsService.update(
      id,
      updateRequirementsListsDetailDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.requirementsListsDetailsService.remove(id);
  }
}
