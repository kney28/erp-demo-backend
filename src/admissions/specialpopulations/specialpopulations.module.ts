import { Module } from '@nestjs/common'; 
import { SpecialpopulationsService } from './specialpopulations.service'; 
import { SpecialpopulationsController } from './specialpopulations.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Specialpopulation } from './entities/specialpopulation.entity'; 
import { SpecialpopulationLogs } from './entities/specialpopulationlogs.entity'; 
import { SpecialpopulationSubscriber } from './entities/specialpopulation.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Specialpopulation]), 
		TypeOrmModule.forFeature([SpecialpopulationLogs]), 
	], 
	controllers: [SpecialpopulationsController], 
	providers: [SpecialpopulationsService, SpecialpopulationSubscriber], 
	exports: [SpecialpopulationsService], 
})
export class SpecialpopulationsModule {}