import { Module } from '@nestjs/common'; 
import { AccmonclosService } from './accmonclos.service'; 
import { AccmonclosController } from './accmonclos.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Accmonclo } from './entities/accmonclo.entity'; 
import { AccmoncloLogs } from './entities/accmonclologs.entity'; 
import { AccmoncloSubscriber } from './entities/accmonclo.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Accmonclo]), 
		TypeOrmModule.forFeature([AccmoncloLogs]), 
	], 
	controllers: [AccmonclosController], 
	providers: [AccmonclosService, AccmoncloSubscriber], 
	exports: [AccmonclosService], 
})
export class AccmonclosModule {}