import { Module } from '@nestjs/common';
import { AppreacansService } from './appreacans.service';
import { AppreacansController } from './appreacans.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Appreacan } from './entities/appreacan.entity';
import { AppreacanLogs } from './entities/appreacanlogs.entity';
import { AppreacanSubscriber } from './entities/appreacan.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([Appreacan]),
    TypeOrmModule.forFeature([AppreacanLogs]),
  ],
  controllers: [AppreacansController],
  providers: [AppreacansService, AppreacanSubscriber],
  exports: [AppreacansService],
})
export class AppreacansModule {}
