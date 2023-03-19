import { Module } from '@nestjs/common'; 
import { HcdignosessService } from './hcdignosess.service'; 
import { HcdignosessController } from './hcdignosess.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Hcdignoses } from './entities/hcdignoses.entity'; 
import { HcdignosesLogs } from './entities/hcdignoseslogs.entity'; 
import { HcdignosesSubscriber } from './entities/hcdignoses.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Hcdignoses]), 
		TypeOrmModule.forFeature([HcdignosesLogs]), 
	], 
	controllers: [HcdignosessController], 
	providers: [HcdignosessService, HcdignosesSubscriber], 
	exports: [HcdignosessService], 
})
export class HcdignosessModule {}