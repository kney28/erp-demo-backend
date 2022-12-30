import { Module } from '@nestjs/common';
import { CopaysAndFeesService } from './copaysandfees.service';
import { CopaysAndFeesController } from './copaysandfees.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CopaysAndFee } from './entities/copaysAndFee.entity';
import { CopaysAndFeesLogs } from './entities/copaysAndFeeslogs.entity';
import { CopaysAndFeesSubscriber } from './entities/copaysAndFees.subscriber';

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
