import { Module } from '@nestjs/common'; 
import { LocationsService } from './locations.service'; 
import { LocationsController } from './locations.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Location } from './entities/location.entity'; 
import { LocationLogs } from './entities/locationlogs.entity'; 
import { LocationSubscriber } from './entities/location.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Location]), 
		TypeOrmModule.forFeature([LocationLogs]), 
	], 
	controllers: [LocationsController], 
	providers: [LocationsService, LocationSubscriber], 
	exports: [LocationsService], 
})
export class LocationsModule {}