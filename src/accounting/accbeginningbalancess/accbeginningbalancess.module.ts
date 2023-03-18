import { Module } from '@nestjs/common'; 
import { AccbeginningbalancessService } from './accbeginningbalancess.service'; 
import { AccbeginningbalancessController } from './accbeginningbalancess.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Accbeginningbalances } from './entities/accbeginningbalances.entity'; 
import { AccbeginningbalancesLogs } from './entities/accbeginningbalanceslogs.entity'; 
import { AccbeginningbalancesSubscriber } from './entities/accbeginningbalances.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Accbeginningbalances]), 
		TypeOrmModule.forFeature([AccbeginningbalancesLogs]), 
	], 
	controllers: [AccbeginningbalancessController], 
	providers: [AccbeginningbalancessService, AccbeginningbalancesSubscriber], 
	exports: [AccbeginningbalancessService], 
})
export class AccbeginningbalancessModule {}