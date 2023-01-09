import { Module } from '@nestjs/common';
import { ChargeService } from './charge.service';
import { ChargeController } from './charge.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChargeLogs } from './entities/chargelogs.entity';
import { ChargeSubscriber } from './entities/charge.subscriber';
import { Charge } from './entities/charge.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Charge]),
    TypeOrmModule.forFeature([ChargeLogs]),
  ],
  controllers: [ChargeController],
  providers: [ChargeService, ChargeSubscriber],
  exports: [ChargeService],
})
export class ChargeModule {}
