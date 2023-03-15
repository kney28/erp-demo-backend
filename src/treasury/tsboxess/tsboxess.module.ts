import { Module } from '@nestjs/common'; 
import { TsboxessService } from './tsboxess.service'; 
import { TsboxessController } from './tsboxess.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Tsboxes } from './entities/tsboxes.entity'; 
import { TsboxesLogs } from './entities/tsboxeslogs.entity'; 
import { TsboxesSubscriber } from './entities/tsboxes.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Tsboxes]), 
		TypeOrmModule.forFeature([TsboxesLogs]), 
	], 
	controllers: [TsboxessController], 
	providers: [TsboxessService, TsboxesSubscriber], 
	exports: [TsboxessService], 
})
export class TsboxessModule {}