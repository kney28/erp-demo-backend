import { Module } from '@nestjs/common';
import { ValidityService } from './validity.service';
import { ValidityController } from './validity.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Validity } from './entities/validity.entity';
import { ValidityLogs } from './entities/validitylogs.entity';
import { ValiditySubscriber } from './entities/validity.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([Validity]),
    TypeOrmModule.forFeature([ValidityLogs]),
  ],
  controllers: [ValidityController],
  providers: [ValidityService, ValiditySubscriber],
  exports: [ValidityService],
})
export class ValidityModule {}
