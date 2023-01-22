import { Module } from '@nestjs/common';
import { GroupsCupsService } from './groups-cups.service';
import { GroupsCupsController } from './groups-cups.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupsCup } from './entities/groups-cup.entity';
import { GroupsCupLogs } from './entities/groups-cuplogs.entity';
import { GroupsCupSubscriber } from './entities/groups-cup.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([GroupsCup]),
    TypeOrmModule.forFeature([GroupsCupLogs]),
  ],
  controllers: [GroupsCupsController],
  providers: [GroupsCupsService, GroupsCupSubscriber],
})
export class GroupsCupsModule {}
