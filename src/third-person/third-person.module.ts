import { Module } from '@nestjs/common';
import { ThirdPersonService } from './third-person.service';
import { ThirdPersonController } from './third-person.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThirdPerson } from './entities/third-person.entity';
import { ThirdPersonLogs } from './entities/third-personlogs.entity';
import { ThirdPersonSubscriber } from './entities/third-person.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([ThirdPerson]),
    TypeOrmModule.forFeature([ThirdPersonLogs]),
  ],
  controllers: [ThirdPersonController],
  providers: [ThirdPersonService, ThirdPersonSubscriber],
  exports: [ThirdPersonService],
})
export class ThirdPersonModule {}
