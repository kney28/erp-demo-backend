import { Module } from '@nestjs/common';
import { GooclasService } from './gooclas.service';
import { GooclasController } from './gooclas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Goocla } from './entities/goocla.entity';
import { GooclaLogs } from './entities/gooclalogs.entity';
import { GooclaSubscriber } from './entities/goocla.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([Goocla]),
    TypeOrmModule.forFeature([GooclaLogs]),
  ],
  controllers: [GooclasController],
  providers: [GooclasService, GooclaSubscriber],
  exports: [GooclasService],
})
export class GooclasModule {}
