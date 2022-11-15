import { Module } from '@nestjs/common';
import { ThirdPersonsService } from './thirdPersons.service';
import { ThirdPersonsController } from './thirdPersons.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThirdPerson } from './entities/thirdPerson.entity';
import { Thirdpersonlogs } from './entities/thirdpersonlogs.entity';
import { ThirdPersonSubscriber } from './entities/thirdperson.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([ThirdPerson]),
    TypeOrmModule.forFeature([Thirdpersonlogs]),
  ],
  controllers: [ThirdPersonsController],
  providers: [ThirdPersonsService, ThirdPersonSubscriber],
  exports: [ThirdPersonsService],
})
export class ThirdPersonsModule {}
