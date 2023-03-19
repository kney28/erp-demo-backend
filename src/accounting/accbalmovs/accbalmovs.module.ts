import { Module } from '@nestjs/common'; 
import { AccbalmovsService } from './accbalmovs.service'; 
import { AccbalmovsController } from './accbalmovs.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Accbalmov } from './entities/accbalmov.entity'; 
import { AccbalmovLogs } from './entities/accbalmovlogs.entity'; 
import { AccbalmovSubscriber } from './entities/accbalmov.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Accbalmov]), 
		TypeOrmModule.forFeature([AccbalmovLogs]), 
	], 
	controllers: [AccbalmovsController], 
	providers: [AccbalmovsService, AccbalmovSubscriber], 
	exports: [AccbalmovsService], 
})
export class AccbalmovsModule {}