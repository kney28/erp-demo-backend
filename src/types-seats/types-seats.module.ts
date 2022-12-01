import { Module } from '@nestjs/common';
import { TypesSeatsService } from './types-seats.service';
import { TypesSeatsController } from './types-seats.controller';
import { TypesSeat } from './entities/types-seat.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TypesSeat]), TypesSeatsModule],
  controllers: [TypesSeatsController],
  providers: [TypesSeatsService],
  exports: [TypesSeatsService],
})
export class TypesSeatsModule {}
