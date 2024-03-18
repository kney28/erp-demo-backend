import { Module } from '@nestjs/common'; 
import { FloorsService } from './floors.service'; 
import { FloorsController } from './floors.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Floor } from './entities/floor.entity'; 
import { FloorLogs } from './entities/floorlogs.entity'; 
import { FloorSubscriber } from './entities/floor.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Floor]), 
		TypeOrmModule.forFeature([FloorLogs]), 
	], 
	controllers: [FloorsController], 
	providers: [FloorsService, FloorSubscriber], 
	exports: [FloorsService], 
})
export class FloorsModule {}