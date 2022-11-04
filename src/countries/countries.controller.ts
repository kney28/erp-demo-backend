import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  UseGuards,
} from '@nestjs/common';
import { CountriesService } from './countries.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Country } from './entities/country.entity';
@UseGuards(JwtAuthGuard)
@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Post()
  create(
    @Body() createCountryDto: CreateCountryDto,
    @Request() req,
  ): Promise<Country> {
    createCountryDto['usuario'] = req.user.id;
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
