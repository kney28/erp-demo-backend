import { Module } from '@nestjs/common'; 
import { TsbankssService } from './tsbankss.service'; 
import { TsbankssController } from './tsbankss.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Tsbanks } from './entities/tsbanks.entity'; 
import { TsbanksLogs } from './entities/tsbankslogs.entity'; 
import { TsbanksSubscriber } from './entities/tsbanks.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Tsbanks]), 
		TypeOrmModule.forFeature([TsbanksLogs]), 
	], 
	controllers: [TsbankssController], 
	providers: [TsbankssService, TsbanksSubscriber], 
	exports: [TsbankssService], 
})
export class TsbankssModule {}