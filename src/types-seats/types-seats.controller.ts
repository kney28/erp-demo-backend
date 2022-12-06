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
import { TypesSeatsService } from './types-seats.service';
import { CreateTypesSeatDto } from './dto/create-types-seat.dto';
import { UpdateTypesSeatDto } from './dto/update-types-seat.dto';
import { TypesSeat } from './entities/types-seat.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('Tipos de asientos')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('types-seats')
export class TypesSeatsController {
  constructor(private readonly typesSeatsService: TypesSeatsService) {}

  @Post()
  create(@Body() createTypesSeatDto: CreateTypesSeatDto): Promise<TypesSeat> {
    return this.typesSeatsService.create(createTypesSeatDto);
  }

  @Get()
  findAll(): Promise<TypesSeat[]> {
    return this.typesSeatsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<TypesSeat> {
    return this.typesSeatsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTypesSeatDto: UpdateTypesSeatDto,
  ): Promise<TypesSeat> {
    return this.typesSeatsService.update(id, updateTypesSeatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<TypesSeat> {
    return this.typesSeatsService.remove(id);
  }
}
