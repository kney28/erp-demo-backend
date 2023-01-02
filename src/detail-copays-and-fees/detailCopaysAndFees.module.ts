import { Module } from '@nestjs/common';
import { DetailCopaysAndFeesService } from './detailcopaysAndFees.service';
import { DetailCopaysAndFeesController } from './detailCopaysAndFees.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetailCopaysAndFee } from './entities/detailCopaysAndFee.entity';
import { DetailCopaysAndFeesLogs } from './entities/detailCopaysAndFeesLogs.entity';
import { DetailCopaysAndFeesSubscriber } from './entities/detailCopaysAndFees.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([DetailCopaysAndFee]),
    TypeOrmModule.forFeature([DetailCopaysAndFeesLogs]),
  ],
  controllers: [DetailCopaysAndFeesController],
  providers: [DetailCopaysAndFeesService, DetailCopaysAndFeesSubscriber],
  exports: [DetailCopaysAndFeesService],
})
export class DetailCopaysAndFeesModule {}
