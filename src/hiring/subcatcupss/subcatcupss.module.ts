import { Module } from '@nestjs/common'; 
import { SubcatcupssService } from './subcatcupss.service'; 
import { SubcatcupssController } from './subcatcupss.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Subcatcups } from './entities/subcatcups.entity'; 
import { SubcatcupsLogs } from './entities/subcatcupslogs.entity'; 
import { SubcatcupsSubscriber } from './entities/subcatcups.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Subcatcups]), 
		TypeOrmModule.forFeature([SubcatcupsLogs]), 
	], 
	controllers: [SubcatcupssController], 
	providers: [SubcatcupssService, SubcatcupsSubscriber], 
	exports: [SubcatcupssService], 
})
export class SubcatcupssModule {}