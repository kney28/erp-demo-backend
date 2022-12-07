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
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { DetailsAccountingSeatService } from './detailsAccountingSeat.service';
import { CreateDetailsAccountingSeatDto } from './dto/create-detailsAccountingSeat.dto';
import { UpdateDetailsAccountingSeatDto } from './dto/update-detailsAccountingSeat.dto';
import { DetailsAccountingSeat } from './entities/detailsAccountingSeat.entity';

@Controller('detailsaccountingseat')
@UseInterceptors(ClassSerializerInterceptor)
export class DetailsAccountingSeatController {
  constructor(
    private readonly detailsAccountingSeatService: DetailsAccountingSeatService,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(
    @Body() createDetailsAccountingSeatDto: CreateDetailsAccountingSeatDto,
  ): Promise<DetailsAccountingSeat> {
    return this.detailsAccountingSeatService.create(
      createDetailsAccountingSeatDto,
    );
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(): Promise<DetailsAccountingSeat[]> {
    return this.detailsAccountingSeatService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string): Promise<DetailsAccountingSeat> {
    return this.detailsAccountingSeatService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id') id: string,
    @Body() updateDetailsAccountingSeatDto: UpdateDetailsAccountingSeatDto,
  ): Promise<DetailsAccountingSeat> {
    return this.detailsAccountingSeatService.update(
      id,
      updateDetailsAccountingSeatDto,
    );
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string): Promise<DetailsAccountingSeat> {
    return this.detailsAccountingSeatService.remove(id);
  }
}
