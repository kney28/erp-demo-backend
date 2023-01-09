import { Module } from '@nestjs/common';
import { AccountingSeatsService } from './accountingSeats.service';
import { AccountingSeatsController } from './accountingSeats.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountingSeat } from './entities/accountingSeat.entity';
import { AccountingSeatsLogs } from './entities/accountingseatslogs.entity';
import { AccountingSeatSubscriber } from './entities/accountingseats.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([AccountingSeat]),
    TypeOrmModule.forFeature([AccountingSeatsLogs]),
  ],
  controllers: [AccountingSeatsController],
  providers: [AccountingSeatsService, AccountingSeatSubscriber],
  exports: [AccountingSeatsService],
})
export class AccountingSeatsModule {}
