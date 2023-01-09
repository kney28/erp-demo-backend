import { Module } from '@nestjs/common';
import { SpecialPopulationService } from './specialpopulation.service';
import { SpecialPopulationController } from './specialpopulation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpecialPopulation } from './entities/specialpopulation.entity';
import { SpecialPopulationLogs } from './entities/specialpopulationlogs.entity';
import { SpecialPopulationSubscriber } from './entities/specialpopulation.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([SpecialPopulation]),
    TypeOrmModule.forFeature([SpecialPopulationLogs]),
  ],
  controllers: [SpecialPopulationController],
  providers: [SpecialPopulationService, SpecialPopulationSubscriber],
  exports: [SpecialPopulationService],
})
export class SpecialPopulationModule {}
