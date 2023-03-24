import { Module } from '@nestjs/common';
import { HcadvereventclasssService } from './hcadvereventclasss.service';
import { HcadvereventclasssController } from './hcadvereventclasss.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hcadvereventclass } from './entities/hcadvereventclass.entity';
import { HcadvereventclassLogs } from './entities/hcadvereventclasslogs.entity';
import { HcadvereventclassSubscriber } from './entities/hcadvereventclass.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([Hcadvereventclass]),
    TypeOrmModule.forFeature([HcadvereventclassLogs]),
  ],
  controllers: [HcadvereventclasssController],
  providers: [HcadvereventclasssService, HcadvereventclassSubscriber],
  exports: [HcadvereventclasssService],
})
export class HcadvereventclasssModule {}
