import { Module } from '@nestjs/common';
import { HccauseremisrefersService } from './hccauseremisrefers.service';
import { HccauseremisrefersController } from './hccauseremisrefers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hccauseremisrefer } from './entities/hccauseremisrefer.entity';
import { HccauseremisreferLogs } from './entities/hccauseremisreferlogs.entity';
import { HccauseremisreferSubscriber } from './entities/hccauseremisrefer.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([Hccauseremisrefer]),
    TypeOrmModule.forFeature([HccauseremisreferLogs]),
  ],
  controllers: [HccauseremisrefersController],
  providers: [HccauseremisrefersService, HccauseremisreferSubscriber],
  exports: [HccauseremisrefersService],
})
export class HccauseremisrefersModule {}
