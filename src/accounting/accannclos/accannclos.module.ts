import { Module } from '@nestjs/common'; 
import { AccannclosService } from './accannclos.service'; 
import { AccannclosController } from './accannclos.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Accannclo } from './entities/accannclo.entity'; 
import { AccanncloLogs } from './entities/accannclologs.entity'; 
import { AccanncloSubscriber } from './entities/accannclo.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Accannclo]), 
		TypeOrmModule.forFeature([AccanncloLogs]), 
	], 
	controllers: [AccannclosController], 
	providers: [AccannclosService, AccanncloSubscriber], 
	exports: [AccannclosService], 
})
export class AccannclosModule {}