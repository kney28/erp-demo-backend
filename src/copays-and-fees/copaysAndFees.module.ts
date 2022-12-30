import { Module } from '@nestjs/common';
import { CopaysAndFeesService } from './copaysandfees.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { CopaysAndFee } from './entities/copaysandfee.entity';
import { CopaysAndFeesLogs } from './entities/copaysandfeeslogs.entity';
import { CopaysAndFeesSubscriber } from './entities/copaysandfees.subscriber';
import { CopaysAndFeesController } from './copaysandfees.controller';

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
