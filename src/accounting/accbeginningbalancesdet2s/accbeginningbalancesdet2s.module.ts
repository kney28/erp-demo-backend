import { Module } from '@nestjs/common'; 
import { Accbeginningbalancesdet2sService } from './accbeginningbalancesdet2s.service'; 
import { Accbeginningbalancesdet2sController } from './accbeginningbalancesdet2s.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Accbeginningbalancesdet2 } from './entities/accbeginningbalancesdet2.entity'; 
import { Accbeginningbalancesdet2Logs } from './entities/accbeginningbalancesdet2logs.entity'; 
import { Accbeginningbalancesdet2Subscriber } from './entities/accbeginningbalancesdet2.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Accbeginningbalancesdet2]), 
		TypeOrmModule.forFeature([Accbeginningbalancesdet2Logs]), 
	], 
	controllers: [Accbeginningbalancesdet2sController], 
	providers: [Accbeginningbalancesdet2sService, Accbeginningbalancesdet2Subscriber], 
	exports: [Accbeginningbalancesdet2sService], 
})
export class Accbeginningbalancesdet2sModule {}