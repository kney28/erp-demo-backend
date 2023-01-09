import { Module } from '@nestjs/common';
import { HeadquartersService } from './headquarters.service';
import { HeadquartersController } from './headquarters.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Headquarters } from './entities/headquarters.entity';
import { HeadquartersLogs } from './entities/headquarterslogs.entity';
import { HeadquartersSubscriber } from './entities/headquarters.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([Headquarters]),
    TypeOrmModule.forFeature([HeadquartersLogs]),
  ],
  controllers: [HeadquartersController],
  providers: [HeadquartersService, HeadquartersSubscriber],
  exports: [HeadquartersService],
})
export class HeadquartersModule {}
