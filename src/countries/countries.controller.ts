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
import { CountriesService } from './countries.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Country } from './entities/country.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Paises')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Post()
  create(@Body() createCountryDto: CreateCountryDto): Promise<Country> {
    return this.countriesService.create(createCountryDto);
  }

  @Get()
  findAll(): Promise<Country[]> {
    return this.countriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Country> {
    return this.countriesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCountryDto: UpdateCountryDto,
  ): Promise<Country> {
    return this.countriesService.update(id, updateCountryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Country> {
    return this.countriesService.remove(id);
  }
}
