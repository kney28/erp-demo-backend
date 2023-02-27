import { Module } from '@nestjs/common'; 
import { CxpcouconsService } from './cxpcoucons.service'; 
import { CxpcouconsController } from './cxpcoucons.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Cxpcoucon } from './entities/cxpcoucon.entity'; 
import { CxpcouconLogs } from './entities/cxpcouconlogs.entity'; 
import { CxpcouconSubscriber } from './entities/cxpcoucon.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Cxpcoucon]), 
		TypeOrmModule.forFeature([CxpcouconLogs]), 
	], 
	controllers: [CxpcouconsController], 
	providers: [CxpcouconsService, CxpcouconSubscriber], 
	exports: [CxpcouconsService], 
})
export class CxpcouconsModule {}