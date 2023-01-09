import { Module } from '@nestjs/common';
import { TypesSeatsService } from './types-seats.service';
import { TypesSeatsController } from './types-seats.controller';
import { TypesSeat } from './entities/types-seat.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypesSeatlogs } from './entities/types-seatslogs.entity';
import { TypesSeatSubscriber } from './entities/types-seats.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([TypesSeat]),
    TypesSeatsModule,
    TypeOrmModule.forFeature([TypesSeatlogs]),
  ],
  controllers: [TypesSeatsController],
  providers: [TypesSeatsService, TypesSeatSubscriber],
  exports: [TypesSeatsService],
})
export class TypesSeatsModule {}
