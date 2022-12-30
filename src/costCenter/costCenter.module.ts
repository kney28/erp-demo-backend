import { Module } from '@nestjs/common';
import { CostCenterService } from './costCenter.service';
import { CostCenterController } from './costCenter.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CostCenter } from './entities/costCenter.entity';
import { CostCenterLogs } from './entities/costCenterlogs.entity';
import { CostCenterSubscriber } from './entities/costCenter.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([CostCenter]),
    TypeOrmModule.forFeature([CostCenterLogs]),
  ],
  controllers: [CostCenterController],
  providers: [CostCenterService, CostCenterSubscriber],
  exports: [CostCenterService],
})
export class CostCenterModule {}
