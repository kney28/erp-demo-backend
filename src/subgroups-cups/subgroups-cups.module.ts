import { Module } from '@nestjs/common';
import { SubgroupsCupsService } from './subgroups-cups.service';
import { SubgroupsCupsController } from './subgroups-cups.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubgroupsCup } from './entities/subgroups-cup.entity';
import { SubgroupsCupLogs } from './entities/subgroups-cuplogs.entity';
import { SubgroupsCupSubscriber } from './entities/subgroups-cup.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([SubgroupsCup]),
    TypeOrmModule.forFeature([SubgroupsCupLogs]),
  ],
  controllers: [SubgroupsCupsController],
  providers: [SubgroupsCupsService, SubgroupsCupSubscriber],
})
export class SubgroupsCupsModule {}
