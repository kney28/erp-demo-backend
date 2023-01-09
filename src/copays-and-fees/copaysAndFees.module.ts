import { Module } from '@nestjs/common';
import { CopaysAndFeesService } from './copaysAndFees.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { CopaysAndFee } from './entities/copaysAndFee.entity';
import { CopaysAndFeesLogs } from './entities/copaysAndFeeslogs.entity';
import { CopaysAndFeesSubscriber } from './entities/copaysAndFees.subscriber';
import { CopaysAndFeesController } from './copaysAndFees.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([CopaysAndFee]),
    TypeOrmModule.forFeature([CopaysAndFeesLogs]),
  ],
  controllers: [CopaysAndFeesController],
  providers: [CopaysAndFeesService, CopaysAndFeesSubscriber],
  exports: [CopaysAndFeesService],
})
export class CopaysAndFeesModule {}
