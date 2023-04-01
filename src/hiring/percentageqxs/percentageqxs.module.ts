import { Module } from '@nestjs/common'; 
import { PercentageqxsService } from './percentageqxs.service'; 
import { PercentageqxsController } from './percentageqxs.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Percentageqx } from './entities/percentageqx.entity'; 
import { PercentageqxLogs } from './entities/percentageqxlogs.entity'; 
import { PercentageqxSubscriber } from './entities/percentageqx.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Percentageqx]), 
		TypeOrmModule.forFeature([PercentageqxLogs]), 
	], 
	controllers: [PercentageqxsController], 
	providers: [PercentageqxsService, PercentageqxSubscriber], 
	exports: [PercentageqxsService], 
})
export class PercentageqxsModule {}