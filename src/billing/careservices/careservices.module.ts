import { Module } from '@nestjs/common'; 
import { CareservicesService } from './careservices.service'; 
import { CareservicesController } from './careservices.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Careservice } from './entities/careservice.entity'; 
import { CareserviceLogs } from './entities/careservicelogs.entity'; 
import { CareserviceSubscriber } from './entities/careservice.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Careservice]), 
		TypeOrmModule.forFeature([CareserviceLogs]), 
	], 
	controllers: [CareservicesController], 
	providers: [CareservicesService, CareserviceSubscriber], 
	exports: [CareservicesService], 
})
export class CareservicesModule {}