import { Module } from '@nestjs/common';
import { ThirdPartyAccountantsService } from './third-party-accountants.service';
import { ThirdPartyAccountantsController } from './third-party-accountants.controller';
import { ThirdPartyAccountant } from './entities/third-party-accountant.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThirdPersonModule } from 'src/third-person/third-person.module';
import { ThirdPartyAccountantLogs } from './entities/third-party-accountantlogs.entity';
import { ThirdPartyAccountantSubscriber } from './entities/third-party-accountant.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([ThirdPartyAccountant]),
    ThirdPersonModule,
    TypeOrmModule.forFeature([ThirdPartyAccountantLogs]),
  ],
  controllers: [ThirdPartyAccountantsController],
  providers: [ThirdPartyAccountantsService, ThirdPartyAccountantSubscriber],
})
export class ThirdPartyAccountantsModule {}
