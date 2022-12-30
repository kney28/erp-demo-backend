import { Module } from '@nestjs/common';
import { CostCenterService } from './costcenter.service';
import { CostCenterController } from './costcenter.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CostCenter } from './entities/costcenter.entity';
import { CostCenterLogs } from './entities/costcenterlogs.entity';
import { CostCenterSubscriber } from './entities/costcenter.subscriber';

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
