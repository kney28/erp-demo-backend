import { Module } from '@nestjs/common';
import { FloorsService } from './floors.service';
import { FloorsController } from './floors.controller';
import { FloorSubscriber } from './entities/floor.subscriber';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Floor } from './entities/floor.entity';
import { FloorLogs } from './entities/floor-logs.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Floor]),
    FloorsModule,
    TypeOrmModule.forFeature([FloorLogs]),
  ],
  controllers: [FloorsController],
  providers: [FloorsService, FloorSubscriber],
  exports: [FloorsService],
})
export class FloorsModule {}
