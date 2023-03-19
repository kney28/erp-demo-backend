import { Module } from '@nestjs/common';
import { HcspecialtiessService } from './hcspecialtiess.service';
import { HcspecialtiessController } from './hcspecialtiess.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hcspecialties } from './entities/hcspecialties.entity';
import { HcspecialtiesLogs } from './entities/hcspecialtieslogs.entity';
import { HcspecialtiesSubscriber } from './entities/hcspecialties.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([Hcspecialties]),
    TypeOrmModule.forFeature([HcspecialtiesLogs]),
  ],
  controllers: [HcspecialtiessController],
  providers: [HcspecialtiessService, HcspecialtiesSubscriber],
  exports: [HcspecialtiessService],
})
export class HcspecialtiessModule {}
