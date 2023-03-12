import { Module } from '@nestjs/common'; 
import { AccannualclosingentrysService } from './accannualclosingentrys.service'; 
import { AccannualclosingentrysController } from './accannualclosingentrys.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Accannualclosingentry } from './entities/accannualclosingentry.entity'; 
import { AccannualclosingentryLogs } from './entities/accannualclosingentrylogs.entity'; 
import { AccannualclosingentrySubscriber } from './entities/accannualclosingentry.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Accannualclosingentry]), 
		TypeOrmModule.forFeature([AccannualclosingentryLogs]), 
	], 
	controllers: [AccannualclosingentrysController], 
	providers: [AccannualclosingentrysService, AccannualclosingentrySubscriber], 
	exports: [AccannualclosingentrysService], 
})
export class AccannualclosingentrysModule {}