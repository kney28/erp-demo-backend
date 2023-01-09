import { Module } from '@nestjs/common';
import { AnnualClosingService } from './annualclosing.service';
import { AnnualClosingController } from './annualclosing.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnnualClosing } from './entities/annualclosing.entity';
import { AnnualClosingLogs } from './entities/annualclosinglogs.entity';
import { AnnualClosingSubscriber } from './entities/annualclosing.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([AnnualClosing]),
    TypeOrmModule.forFeature([AnnualClosingLogs]),
  ],
  controllers: [AnnualClosingController],
  providers: [AnnualClosingService, AnnualClosingSubscriber],
  exports: [AnnualClosingService],
})
export class AnnualClosingModule {}
