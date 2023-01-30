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
import { ValidityService } from './validity.service';
import { CreateValidityDto } from './dto/create-validity.dto';
import { UpdateValidityDto } from './dto/update-validity.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Validity } from './entities/validity.entity';

@Controller('configuration/validity')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
export class ValidityController {
  constructor(private readonly validityService: ValidityService) {}

  @Post()
  create(@Body() createValidityDto: CreateValidityDto): Promise<Validity> {
    return this.validityService.create(createValidityDto);
  }

  @Get()
  findAll(): Promise<Validity[]> {
    return this.validityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Validity> {
    return this.validityService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateValidityDto: UpdateValidityDto,
  ): Promise<Validity> {
    return this.validityService.update(id, updateValidityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Validity> {
    return this.validityService.remove(id);
  }
}
