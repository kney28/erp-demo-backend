import { Module } from '@nestjs/common';
import { GeneralAccountingService } from './generalaccounting.service';
import { GeneralAccountingController } from './generalaccounting.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GeneralAccounting } from './entities/generalaccounting.entity';
import { GeneralAccountingLogs } from './entities/generalaccountinglogs.entity';
import { GeneralAccountingSubscriber } from './entities/generalaccounting.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([GeneralAccounting]),
    TypeOrmModule.forFeature([GeneralAccountingLogs]),
  ],
  controllers: [GeneralAccountingController],
  providers: [GeneralAccountingService, GeneralAccountingSubscriber],
  exports: [GeneralAccountingService],
})
export class GeneralAccountingModule {}
