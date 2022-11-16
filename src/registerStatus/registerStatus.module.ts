import { Module } from '@nestjs/common';
import { RegisterStatusService } from './registerStatus.service';
import { RegisterStatusController } from './registerStatus.controller';
import { RegisterStatus } from './entities/registerStatus.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Registerstatuslogs } from './entities/registerstatuslogs.entity';
import { RegisterStatusSubscriber } from './entities/registerstatus.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([RegisterStatus]),
    TypeOrmModule.forFeature([Registerstatuslogs]),
  ],
  controllers: [RegisterStatusController],
  providers: [RegisterStatusService, RegisterStatusSubscriber],
  exports: [RegisterStatusService],
})
export class RegisterStatusModule {}
