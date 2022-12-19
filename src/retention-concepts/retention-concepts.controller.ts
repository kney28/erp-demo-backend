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
import { RetentionConceptsService } from './retention-concepts.service';
import { CreateRetentionConceptDto } from './dto/create-retention-concept.dto';
import { UpdateRetentionConceptDto } from './dto/update-retention-concept.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('retention-concepts')
@ApiTags('Conceptos retención')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class RetentionConceptsController {
  constructor(
    private readonly retentionConceptsService: RetentionConceptsService,
  ) {}

  @Post()
  create(@Body() createRetentionConceptDto: CreateRetentionConceptDto) {
    return this.retentionConceptsService.create(createRetentionConceptDto);
  }

  @Get()
  findAll() {
    return this.retentionConceptsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.retentionConceptsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRetentionConceptDto: UpdateRetentionConceptDto,
  ) {
    return this.retentionConceptsService.update(id, updateRetentionConceptDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.retentionConceptsService.remove(id);
  }
}
