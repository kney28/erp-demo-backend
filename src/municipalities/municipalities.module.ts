import { Module } from '@nestjs/common';
import { MunicipalitiesService } from './municipalities.service';
import { MunicipalitiesController } from './municipalities.controller';

@Module({
  controllers: [MunicipalitiesController],
  providers: [MunicipalitiesService]
})
export class MunicipalitiesModule {}
