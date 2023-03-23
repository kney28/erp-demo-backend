import { Module } from '@nestjs/common'; 
import { TscasrecconsService } from './tscasreccons.service'; 
import { TscasrecconsController } from './tscasreccons.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Tscasreccon } from './entities/tscasreccon.entity'; 
import { TscasrecconLogs } from './entities/tscasrecconlogs.entity'; 
import { TscasrecconSubscriber } from './entities/tscasreccon.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Tscasreccon]), 
		TypeOrmModule.forFeature([TscasrecconLogs]), 
	], 
	controllers: [TscasrecconsController], 
	providers: [TscasrecconsService, TscasrecconSubscriber], 
	exports: [TscasrecconsService], 
})
export class TscasrecconsModule {}