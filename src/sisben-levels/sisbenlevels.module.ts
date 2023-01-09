import { Module } from '@nestjs/common';
import { SisbenLevelsService } from './sisbenlevels.service';
import { SisbenLevelsController } from './sisbenlevels.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SisbenLevel } from './entities/sisbenlevel.entity';
import { SisbenLevelLogs } from './entities/sisbenlevellogs.entity';
import { SisbenLevelSubscriber } from './entities/sisbenlevel.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([SisbenLevel]),
    TypeOrmModule.forFeature([SisbenLevelLogs]),
  ],
  controllers: [SisbenLevelsController],
  providers: [SisbenLevelsService, SisbenLevelSubscriber],
  exports: [SisbenLevelsService],
})
export class SisbenLevelsModule {}
