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
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ComplementsService } from './complements.service';
import { CreateComplementDto } from './dto/create-complement.dto';
import { UpdateComplementDto } from './dto/update-complement.dto';
import { Complement } from './entities/complement.entity';

@Controller('complements')
@UseGuards(JwtAuthGuard)
export class ComplementsController {
  constructor(private readonly complementsService: ComplementsService) {}

  @Post()
  create(
    @Body() createComplementDto: CreateComplementDto,
  ): Promise<Complement> {
    return this.complementsService.create(createComplementDto);
  }

  @Get()
  findAll(): Promise<Complement[]> {
    return this.complementsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Complement> {
    return this.complementsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateComplementDto: UpdateComplementDto,
  ): Promise<Complement> {
    return this.complementsService.update(id, updateComplementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Complement> {
    return this.complementsService.remove(id);
  }
}
