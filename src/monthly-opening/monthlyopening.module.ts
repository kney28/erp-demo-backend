import { Module } from '@nestjs/common';
import { MonthlyOpeningService } from './monthlyopening.service';
import { MonthlyOpeningController } from './monthlyopening.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MonthlyOpening } from './entities/monthlyopening.entity';
import { MonthlyOpeningLogs } from './entities/monthlyopeninglogs.entity';
import { MonthlyOpeningSubscriber } from './entities/monthlyopening.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([MonthlyOpening]),
    TypeOrmModule.forFeature([MonthlyOpeningLogs]),
  ],
  controllers: [MonthlyOpeningController],
  providers: [MonthlyOpeningService, MonthlyOpeningSubscriber],
  exports: [MonthlyOpeningService],
})
export class MonthlyOpeningModule {}
