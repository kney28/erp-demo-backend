import { Module } from '@nestjs/common';
import { CxcaccrecsService } from './cxcaccrecs.service';
import { CxcaccrecsController } from './cxcaccrecs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cxcaccrec } from './entities/cxcaccrec.entity';
import { CxcaccrecLogs } from './entities/cxcaccreclogs.entity';
import { CxcaccrecSubscriber } from './entities/cxcaccrec.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([Cxcaccrec]),
    TypeOrmModule.forFeature([CxcaccrecLogs]),
  ],
  controllers: [CxcaccrecsController],
  providers: [CxcaccrecsService, CxcaccrecSubscriber],
  exports: [CxcaccrecsService],
})
export class CxcaccrecsModule {}
