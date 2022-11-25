import { Module } from '@nestjs/common';
import { ThirdPersonsService } from './thirdPersons.service';
import { ThirdPersonsController } from './thirdPersons.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThirdPerson } from './entities/thirdPerson.entity';
import { Thirdpersonlogs } from './entities/thirdpersonlogs.entity';
import { ThirdPersonSubscriber } from './entities/thirdperson.subscriber';
import { ThirdPersonExistConstraint } from './validations/thirdPersons.validate.unique';

@Module({
  imports: [
    TypeOrmModule.forFeature([ThirdPerson]),
    TypeOrmModule.forFeature([Thirdpersonlogs]),
  ],
  controllers: [ThirdPersonsController],
  providers: [
    ThirdPersonsService,
    ThirdPersonSubscriber,
    ThirdPersonExistConstraint,
  ],
  exports: [ThirdPersonsService],
})
export class ThirdPersonsModule {}
