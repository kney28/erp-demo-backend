import { Module } from '@nestjs/common';
import { OccupationsService } from './occupations.service';
import { OccupationsController } from './occupations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Occupation } from './entities/occupation.entity';
import { OccupationLogs } from './entities/occupationlogs.entity';
import { OccupationSubscriber } from './entities/occupation.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([Occupation]),
    TypeOrmModule.forFeature([OccupationLogs]),
  ],
  controllers: [OccupationsController],
  providers: [OccupationsService, OccupationSubscriber],
  exports: [OccupationsService],
})
export class OccupationsModule {}
