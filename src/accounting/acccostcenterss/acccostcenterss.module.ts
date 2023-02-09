import { Module } from '@nestjs/common'; 
import { AcccostcenterssService } from './acccostcenterss.service'; 
import { AcccostcenterssController } from './acccostcenterss.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Acccostcenters } from './entities/acccostcenters.entity'; 
import { AcccostcentersLogs } from './entities/acccostcenterslogs.entity'; 
import { AcccostcentersSubscriber } from './entities/acccostcenters.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Acccostcenters]), 
		TypeOrmModule.forFeature([AcccostcentersLogs]), 
	], 
	controllers: [AcccostcenterssController], 
	providers: [AcccostcenterssService, AcccostcentersSubscriber], 
	exports: [AcccostcenterssService], 
})
export class AcccostcenterssModule {}