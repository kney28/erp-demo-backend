import { Module } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { LocationsController } from './locations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationLogs } from './entities/location-logs.entity';
import { LocationSubscriber } from './entities/location.subscriber';
import { Location } from './entities/location.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Location]),
    TypeOrmModule.forFeature([LocationLogs]),
  ],
  controllers: [LocationsController],
  providers: [LocationsService, LocationSubscriber],
})
export class LocationsModule {}
