import { Module } from '@nestjs/common'; 
import { HealthservicesService } from './healthservices.service'; 
import { HealthservicesController } from './healthservices.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Healthservice } from './entities/healthservice.entity'; 
import { HealthserviceLogs } from './entities/healthservicelogs.entity'; 
import { HealthserviceSubscriber } from './entities/healthservice.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Healthservice]), 
		TypeOrmModule.forFeature([HealthserviceLogs]), 
	], 
	controllers: [HealthservicesController], 
	providers: [HealthservicesService, HealthserviceSubscriber], 
	exports: [HealthservicesService], 
})
export class HealthservicesModule {}