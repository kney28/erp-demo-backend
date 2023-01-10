import { Module } from '@nestjs/common';
import { AnnualClosingSeatService } from './annualclosingseat.service';
import { AnnualClosingSeatController } from './annualclosingseat.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnnualClosingSeat } from './entities/annualclosingseat.entity';
import { AnnualClosingSeatLogs } from './entities/annualclosingseatlogs.entity';
import { AnnualClosingSeatSubscriber } from './entities/annualclosingseat.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([AnnualClosingSeat]),
    TypeOrmModule.forFeature([AnnualClosingSeatLogs]),
  ],
  controllers: [AnnualClosingSeatController],
  providers: [AnnualClosingSeatService, AnnualClosingSeatSubscriber],
  exports: [AnnualClosingSeatService],
})
export class AnnualClosingSeatModule {}
