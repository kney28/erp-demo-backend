import { Module } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { CountriesController } from './countries.controller';
import { Country } from './entities/country.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContrySubscriber } from './entities/country.subscriber';
import { Countrylogs } from './entities/countrylogs.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Country]),
    TypeOrmModule.forFeature([Countrylogs]),
  ],
  controllers: [CountriesController],
  providers: [CountriesService, ContrySubscriber],
  exports: [CountriesService],
})
export class CountriesModule {}
