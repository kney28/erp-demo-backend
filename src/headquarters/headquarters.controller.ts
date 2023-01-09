import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { HeadquartersService } from './headquarters.service';
import { CreateHeadquartersDto } from './dto/create-headquarters.dto';
import { UpdateHeadquartersDto } from './dto/update-headquarters.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Headquarters } from './entities/headquarters.entity';

@Controller('headquarters')
@UseGuards(JwtAuthGuard)
@UseInterceptors(ClassSerializerInterceptor)
export class HeadquartersController {
  constructor(private readonly headquartersService: HeadquartersService) {}

  @Post()
  create(
    @Body() createHeadquartersDto: CreateHeadquartersDto,
  ): Promise<Headquarters> {
    return this.headquartersService.create(createHeadquartersDto);
  }

  @Get()
  findAll(): Promise<Headquarters[]> {
    return this.headquartersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Headquarters> {
    return this.headquartersService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHeadquartersDto: UpdateHeadquartersDto,
  ): Promise<Headquarters> {
    return this.headquartersService.update(id, updateHeadquartersDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Headquarters> {
    return this.headquartersService.remove(id);
  }
}
