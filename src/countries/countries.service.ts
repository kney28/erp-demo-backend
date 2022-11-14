import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Country } from './entities/country.entity';

@Injectable()
export class CountriesService {
  constructor(
    @InjectRepository(Country)
    private countriesRepository: Repository<Country>,
  ) {}

  async create(createCountryDto: CreateCountryDto): Promise<Country> {
    const country: Country = this.countriesRepository.create(createCountryDto);
    await this.countriesRepository.save(country);
    return country;
  }

  findAll(): Promise<Country[]> {
    return this.countriesRepository.find();
  }

  findOne(id: string): Promise<Country> {
    return this.countriesRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateCountryDto: UpdateCountryDto,
  ): Promise<Country> {
    await this.countriesRepository.update(id, updateCountryDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<Country> {
    const country: Country = await this.findOne(id);
    await this.countriesRepository.softRemove(country);
    return country;
  }
}
