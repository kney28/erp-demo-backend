import { Module } from '@nestjs/common';
import { RegisterStatusService } from './registerStatus.service';
import { RegisterStatusController } from './registerStatus.controller';
import { RegisterStatus } from './entities/registerStatus.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([RegisterStatus])],
  controllers: [RegisterStatusController],
  providers: [RegisterStatusService],
})
export class RegisterStatusModule {}
