import { Module } from '@nestjs/common';
import { RegisterStatusService } from './register-status.service';
import { RegisterStatusController } from './register-status.controller';
import { RegisterStatus } from './entities/register-status.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([RegisterStatus])],
  controllers: [RegisterStatusController],
  providers: [RegisterStatusService],
})
export class RegisterStatusModule {}
