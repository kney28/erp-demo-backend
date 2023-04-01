import { Module } from '@nestjs/common';
import { HcclassanestrecordsService } from './hcclassanestrecords.service';
import { HcclassanestrecordsController } from './hcclassanestrecords.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hcclassanestrecord } from './entities/hcclassanestrecord.entity';
import { HcclassanestrecordLogs } from './entities/hcclassanestrecordlogs.entity';
import { HcclassanestrecordSubscriber } from './entities/hcclassanestrecord.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([Hcclassanestrecord]),
    TypeOrmModule.forFeature([HcclassanestrecordLogs]),
  ],
  controllers: [HcclassanestrecordsController],
  providers: [HcclassanestrecordsService, HcclassanestrecordSubscriber],
  exports: [HcclassanestrecordsService],
})
export class HcclassanestrecordsModule {}
