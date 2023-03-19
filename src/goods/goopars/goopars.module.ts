import { Module } from '@nestjs/common';
import { GooparsService } from './goopars.service';
import { GooparsController } from './goopars.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Goopar } from './entities/goopar.entity';
import { GooparLogs } from './entities/gooparlogs.entity';
import { GooparSubscriber } from './entities/goopar.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([Goopar]),
    TypeOrmModule.forFeature([GooparLogs]),
  ],
  controllers: [GooparsController],
  providers: [GooparsService, GooparSubscriber],
  exports: [GooparsService],
})
export class GooparsModule {}
