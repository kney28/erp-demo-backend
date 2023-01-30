import { Module } from '@nestjs/common'; 
import { ConsecutivecontrolvaliditiessService } from './consecutivecontrolvaliditiess.service'; 
import { ConsecutivecontrolvaliditiessController } from './consecutivecontrolvaliditiess.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Consecutivecontrolvalidities } from './entities/consecutivecontrolvalidities.entity'; 
import { ConsecutivecontrolvaliditiesLogs } from './entities/consecutivecontrolvaliditieslogs.entity'; 
import { ConsecutivecontrolvaliditiesSubscriber } from './entities/consecutivecontrolvalidities.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Consecutivecontrolvalidities]), 
		TypeOrmModule.forFeature([ConsecutivecontrolvaliditiesLogs]), 
	], 
	controllers: [ConsecutivecontrolvaliditiessController], 
	providers: [ConsecutivecontrolvaliditiessService, ConsecutivecontrolvaliditiesSubscriber], 
	exports: [ConsecutivecontrolvaliditiessService], 
})
export class ConsecutivecontrolvaliditiessModule {}