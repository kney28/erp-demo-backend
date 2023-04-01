import { Module } from '@nestjs/common';
import { HcallerclasssService } from './hcallerclasss.service';
import { HcallerclasssController } from './hcallerclasss.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hcallerclass } from './entities/hcallerclass.entity';
import { HcallerclassLogs } from './entities/hcallerclasslogs.entity';
import { HcallerclassSubscriber } from './entities/hcallerclass.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([Hcallerclass]),
    TypeOrmModule.forFeature([HcallerclassLogs]),
  ],
  controllers: [HcallerclasssController],
  providers: [HcallerclasssService, HcallerclassSubscriber],
  exports: [HcallerclasssService],
})
export class HcallerclasssModule {}
