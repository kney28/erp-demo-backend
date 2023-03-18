import { Module } from '@nestjs/common';
import { CxccouconsService } from './cxccoucons.service';
import { CxccouconsController } from './cxccoucons.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cxccoucon } from './entities/cxccoucon.entity';
import { CxccouconLogs } from './entities/cxccouconlogs.entity';
import { CxccouconSubscriber } from './entities/cxccoucon.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([Cxccoucon]),
    TypeOrmModule.forFeature([CxccouconLogs]),
  ],
  controllers: [CxccouconsController],
  providers: [CxccouconsService, CxccouconSubscriber],
  exports: [CxccouconsService],
})
export class CxccouconsModule {}
