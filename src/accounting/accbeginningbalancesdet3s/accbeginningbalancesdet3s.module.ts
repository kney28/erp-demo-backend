import { Module } from '@nestjs/common'; 
import { Accbeginningbalancesdet3sService } from './accbeginningbalancesdet3s.service'; 
import { Accbeginningbalancesdet3sController } from './accbeginningbalancesdet3s.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Accbeginningbalancesdet3 } from './entities/accbeginningbalancesdet3.entity'; 
import { Accbeginningbalancesdet3Logs } from './entities/accbeginningbalancesdet3logs.entity'; 
import { Accbeginningbalancesdet3Subscriber } from './entities/accbeginningbalancesdet3.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Accbeginningbalancesdet3]), 
		TypeOrmModule.forFeature([Accbeginningbalancesdet3Logs]), 
	], 
	controllers: [Accbeginningbalancesdet3sController], 
	providers: [Accbeginningbalancesdet3sService, Accbeginningbalancesdet3Subscriber], 
	exports: [Accbeginningbalancesdet3sService], 
})
export class Accbeginningbalancesdet3sModule {}