import { Module } from '@nestjs/common';
import { DetailsAccountingSeatService } from './detailsAccountingSeat.service';
import { DetailsAccountingSeatController } from './detailsAccountingSeat.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetailsAccountingSeat } from './entities/detailsAccountingSeat.entity';
import { DetailsAccountingSeatLogs } from './entities/detailsAccountingSeatLogs.entity';
import { DetailsAccountingSeatSubscriber } from './entities/detailsAccountingSeat.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([DetailsAccountingSeat]),
    TypeOrmModule.forFeature([DetailsAccountingSeatLogs]),
  ],
  controllers: [DetailsAccountingSeatController],
  providers: [DetailsAccountingSeatService, DetailsAccountingSeatSubscriber],
  exports: [DetailsAccountingSeatService],
})
export class DetailsAccountingSeatModule {}
