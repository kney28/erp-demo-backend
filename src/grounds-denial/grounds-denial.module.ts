import { Module } from '@nestjs/common';
import { GroundsDenialService } from './grounds-denial.service';
import { GroundsDenialController } from './grounds-denial.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroundsDenial } from './entities/grounds-denial.entity';
import { GroundsDenialLogs } from './entities/grounds-deniallogs.entity';
import { GroundsDenialSubscriber } from './entities/grounds-denial.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([GroundsDenial]),
    TypeOrmModule.forFeature([GroundsDenialLogs]),
  ],
  controllers: [GroundsDenialController],
  providers: [GroundsDenialService, GroundsDenialSubscriber],
})
export class GroundsDenialModule {}
