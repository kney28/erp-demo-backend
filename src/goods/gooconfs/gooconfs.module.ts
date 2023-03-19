import { Module } from '@nestjs/common';
import { GooconfsService } from './gooconfs.service';
import { GooconfsController } from './gooconfs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gooconf } from './entities/gooconf.entity';
import { GooconfLogs } from './entities/gooconflogs.entity';
import { GooconfSubscriber } from './entities/gooconf.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([Gooconf]),
    TypeOrmModule.forFeature([GooconfLogs]),
  ],
  controllers: [GooconfsController],
  providers: [GooconfsService, GooconfSubscriber],
  exports: [GooconfsService],
})
export class GooconfsModule {}
