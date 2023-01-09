import { Module } from '@nestjs/common';
import { HealthAdministratorsService } from './healthadministrators.service';
import { HealthAdministratorsController } from './healthadministrators.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthAdministrator } from './entities/healthadministrator.entity';
import { HealthAdministratorLogs } from './entities/healthadministratorlogs.entity';
import { HealthAdministratorSubscriber } from './entities/healthadministrator.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([HealthAdministrator]),
    TypeOrmModule.forFeature([HealthAdministratorLogs]),
  ],
  controllers: [HealthAdministratorsController],
  providers: [HealthAdministratorsService, HealthAdministratorSubscriber],
  exports: [HealthAdministratorsService],
})
export class HealthAdministratorsModule {}
