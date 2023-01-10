import { Module } from '@nestjs/common';
import { PercentagesQxSoatService } from './percentages-qx-soat.service';
import { PercentagesQxSoatController } from './percentages-qx-soat.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PercentagesQxSoat } from './entities/percentages-qx-soat.entity';
import { PercentagesQxSoatSubscriber } from './entities/percentages-qx-soat.subscriber';
import { PercentagesQxSoatLogs } from './entities/percentages-qx-soat-logs.entity';
import { PercentagesQxSoatExistConstraint } from './validations/percentages-qx-soat.validations';

@Module({
  imports: [
    TypeOrmModule.forFeature([PercentagesQxSoat]),
    TypeOrmModule.forFeature([PercentagesQxSoatLogs]),
  ],
  controllers: [PercentagesQxSoatController],
  providers: [
    PercentagesQxSoatService,
    PercentagesQxSoatSubscriber,
    PercentagesQxSoatExistConstraint,
  ],
  exports: [PercentagesQxSoatService],
})
export class PercentagesQxSoatModule {}
