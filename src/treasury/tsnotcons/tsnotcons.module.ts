import { Module } from '@nestjs/common'; 
import { TsnotconsService } from './tsnotcons.service'; 
import { TsnotconsController } from './tsnotcons.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Tsnotcon } from './entities/tsnotcon.entity'; 
import { TsnotconLogs } from './entities/tsnotconlogs.entity'; 
import { TsnotconSubscriber } from './entities/tsnotcon.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Tsnotcon]), 
		TypeOrmModule.forFeature([TsnotconLogs]), 
	], 
	controllers: [TsnotconsController], 
	providers: [TsnotconsService, TsnotconSubscriber], 
	exports: [TsnotconsService], 
})
export class TsnotconsModule {}