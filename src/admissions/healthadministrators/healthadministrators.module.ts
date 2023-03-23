import { Module } from '@nestjs/common'; 
import { HealthadministratorsService } from './healthadministrators.service'; 
import { HealthadministratorsController } from './healthadministrators.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Healthadministrator } from './entities/healthadministrator.entity'; 
import { HealthadministratorLogs } from './entities/healthadministratorlogs.entity'; 
import { HealthadministratorSubscriber } from './entities/healthadministrator.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Healthadministrator]), 
		TypeOrmModule.forFeature([HealthadministratorLogs]), 
	], 
	controllers: [HealthadministratorsController], 
	providers: [HealthadministratorsService, HealthadministratorSubscriber], 
	exports: [HealthadministratorsService], 
})
export class HealthadministratorsModule {}