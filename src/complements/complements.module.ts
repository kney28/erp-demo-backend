import { Module } from '@nestjs/common';
import { ComplementsService } from './complements.service';
import { ComplementsController } from './complements.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Complement } from './entities/complement.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Complement])],
  controllers: [ComplementsController],
  providers: [ComplementsService]
})
export class ComplementsModule {}
