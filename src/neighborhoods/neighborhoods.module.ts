import { Module } from '@nestjs/common';
import { NeighborhoodsService } from './neighborhoods.service';
import { NeighborhoodsController } from './neighborhoods.controller';
import { NeighborhoodSubscriber } from './entities/neighborhood.subscriber';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Neighborhood } from './entities/neighborhood.entity';
import { Neighborhoodlogs } from './entities/neighborhoodlogs.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Neighborhood]),
    TypeOrmModule.forFeature([Neighborhoodlogs]),
  ],
  controllers: [NeighborhoodsController],
  providers: [NeighborhoodsService, NeighborhoodSubscriber],
  exports: [NeighborhoodsService],
})
export class NeighborhoodsModule {}
