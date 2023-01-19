import { Module } from '@nestjs/common'; 
import { BedsService } from './beds.service'; 
import { BedsController } from './beds.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Bed } from './entities/bed.entity'; 
import { BedLogs } from './entities/bedlogs.entity'; 
import { BedSubscriber } from './entities/bed.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Bed]), 
		TypeOrmModule.forFeature([BedLogs]), 
	], 
	controllers: [BedsController], 
	providers: [BedsService, BedSubscriber], 
	exports: [BedsService], 
})
export class BedsModule {}