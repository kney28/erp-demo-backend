import { Module } from '@nestjs/common';
import { MonthlyClosureService } from './monthlyclosure.service';
import { MonthlyClosureController } from './monthlyclosure.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MonthlyClosure } from './entities/monthlyclosure.entity';
import { MonthlyClosureLogs } from './entities/monthlyclosurelogs.entity';
import { MonthlyClosureSubscriber } from './entities/monthlyclosure.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([MonthlyClosure]),
    TypeOrmModule.forFeature([MonthlyClosureLogs]),
  ],
  controllers: [MonthlyClosureController],
  providers: [MonthlyClosureService, MonthlyClosureSubscriber],
  exports: [MonthlyClosureService],
})
export class MonthlyClosureModule {}
