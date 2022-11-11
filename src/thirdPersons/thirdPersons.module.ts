import { Module } from '@nestjs/common';
import { ThirdPersonsService } from './thirdPersons.service';
import { ThirdPersonsController } from './thirdPersons.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThirdPerson } from './entities/thirdPersonEntity';

@Module({
  imports: [TypeOrmModule.forFeature([ThirdPerson])],
  controllers: [ThirdPersonsController],
  providers: [ThirdPersonsService],
})
export class ThirdPersonsModule {}
