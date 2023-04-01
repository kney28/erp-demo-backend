import { Module } from '@nestjs/common';
import { HcvacunclasssService } from './hcvacunclasss.service';
import { HcvacunclasssController } from './hcvacunclasss.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hcvacunclass } from './entities/hcvacunclass.entity';
import { HcvacunclassLogs } from './entities/hcvacunclasslogs.entity';
import { HcvacunclassSubscriber } from './entities/hcvacunclass.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([Hcvacunclass]),
    TypeOrmModule.forFeature([HcvacunclassLogs]),
  ],
  controllers: [HcvacunclasssController],
  providers: [HcvacunclasssService, HcvacunclassSubscriber],
  exports: [HcvacunclasssService],
})
export class HcvacunclasssModule {}
