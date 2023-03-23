import { Module } from '@nestjs/common'; 
import { PreconfigeneralsService } from './preconfigenerals.service'; 
import { PreconfigeneralsController } from './preconfigenerals.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Preconfigeneral } from './entities/preconfigeneral.entity'; 
import { PreconfigeneralLogs } from './entities/preconfigenerallogs.entity'; 
import { PreconfigeneralSubscriber } from './entities/preconfigeneral.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Preconfigeneral]), 
		TypeOrmModule.forFeature([PreconfigeneralLogs]), 
	], 
	controllers: [PreconfigeneralsController], 
	providers: [PreconfigeneralsService, PreconfigeneralSubscriber], 
	exports: [PreconfigeneralsService], 
})
export class PreconfigeneralsModule {}