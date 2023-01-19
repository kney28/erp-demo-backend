import { Module } from '@nestjs/common'; 
import { FeesService } from './fees.service'; 
import { FeesController } from './fees.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Fee } from './entities/fee.entity'; 
import { FeeLogs } from './entities/feelogs.entity'; 
import { FeeSubscriber } from './entities/fee.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Fee]), 
		TypeOrmModule.forFeature([FeeLogs]), 
	], 
	controllers: [FeesController], 
	providers: [FeesService, FeeSubscriber], 
	exports: [FeesService], 
})
export class FeesModule {}