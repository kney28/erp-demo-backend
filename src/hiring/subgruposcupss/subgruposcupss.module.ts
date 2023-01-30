import { Module } from '@nestjs/common'; 
import { SubgruposcupssService } from './subgruposcupss.service'; 
import { SubgruposcupssController } from './subgruposcupss.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Subgruposcups } from './entities/subgruposcups.entity'; 
import { SubgruposcupsLogs } from './entities/subgruposcupslogs.entity'; 
import { SubgruposcupsSubscriber } from './entities/subgruposcups.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Subgruposcups]), 
		TypeOrmModule.forFeature([SubgruposcupsLogs]), 
	], 
	controllers: [SubgruposcupssController], 
	providers: [SubgruposcupssService, SubgruposcupsSubscriber], 
	exports: [SubgruposcupssService], 
})
export class SubgruposcupssModule {}