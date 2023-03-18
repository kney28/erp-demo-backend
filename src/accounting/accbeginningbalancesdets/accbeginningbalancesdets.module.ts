import { Module } from '@nestjs/common'; 
import { AccbeginningbalancesdetsService } from './accbeginningbalancesdets.service'; 
import { AccbeginningbalancesdetsController } from './accbeginningbalancesdets.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Accbeginningbalancesdet } from './entities/accbeginningbalancesdet.entity'; 
import { AccbeginningbalancesdetLogs } from './entities/accbeginningbalancesdetlogs.entity'; 
import { AccbeginningbalancesdetSubscriber } from './entities/accbeginningbalancesdet.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Accbeginningbalancesdet]), 
		TypeOrmModule.forFeature([AccbeginningbalancesdetLogs]), 
	], 
	controllers: [AccbeginningbalancesdetsController], 
	providers: [AccbeginningbalancesdetsService, AccbeginningbalancesdetSubscriber], 
	exports: [AccbeginningbalancesdetsService], 
})
export class AccbeginningbalancesdetsModule {}