import { Module } from '@nestjs/common'; 
import { RequirementslistdetsService } from './requirementslistdets.service'; 
import { RequirementslistdetsController } from './requirementslistdets.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Requirementslistdet } from './entities/requirementslistdet.entity'; 
import { RequirementslistdetLogs } from './entities/requirementslistdetlogs.entity'; 
import { RequirementslistdetSubscriber } from './entities/requirementslistdet.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Requirementslistdet]), 
		TypeOrmModule.forFeature([RequirementslistdetLogs]), 
	], 
	controllers: [RequirementslistdetsController], 
	providers: [RequirementslistdetsService, RequirementslistdetSubscriber], 
	exports: [RequirementslistdetsService], 
})
export class RequirementslistdetsModule {}