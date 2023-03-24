import { Module } from '@nestjs/common'; 
import { RequirementslistsService } from './requirementslists.service'; 
import { RequirementslistsController } from './requirementslists.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Requirementslist } from './entities/requirementslist.entity'; 
import { RequirementslistLogs } from './entities/requirementslistlogs.entity'; 
import { RequirementslistSubscriber } from './entities/requirementslist.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Requirementslist]), 
		TypeOrmModule.forFeature([RequirementslistLogs]), 
	], 
	controllers: [RequirementslistsController], 
	providers: [RequirementslistsService, RequirementslistSubscriber], 
	exports: [RequirementslistsService], 
})
export class RequirementslistsModule {}
