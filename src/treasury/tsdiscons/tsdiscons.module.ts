import { Module } from '@nestjs/common'; 
import { TsdisconsService } from './tsdiscons.service'; 
import { TsdisconsController } from './tsdiscons.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Tsdiscon } from './entities/tsdiscon.entity'; 
import { TsdisconLogs } from './entities/tsdisconlogs.entity'; 
import { TsdisconSubscriber } from './entities/tsdiscon.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Tsdiscon]), 
		TypeOrmModule.forFeature([TsdisconLogs]), 
	], 
	controllers: [TsdisconsController], 
	providers: [TsdisconsService, TsdisconSubscriber], 
	exports: [TsdisconsService], 
})
export class TsdisconsModule {}