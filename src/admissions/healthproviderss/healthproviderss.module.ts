import { Module } from '@nestjs/common'; 
import { HealthproviderssService } from './healthproviderss.service'; 
import { HealthproviderssController } from './healthproviderss.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Healthproviders } from './entities/healthproviders.entity'; 
import { HealthprovidersLogs } from './entities/healthproviderslogs.entity'; 
import { HealthprovidersSubscriber } from './entities/healthproviders.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Healthproviders]), 
		TypeOrmModule.forFeature([HealthprovidersLogs]), 
	], 
	controllers: [HealthproviderssController], 
	providers: [HealthproviderssService, HealthprovidersSubscriber], 
	exports: [HealthproviderssService], 
})
export class HealthproviderssModule {}