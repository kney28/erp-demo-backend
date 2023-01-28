import { Module } from '@nestjs/common'; 
import { HolidayssService } from './holidayss.service'; 
import { HolidayssController } from './holidayss.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Holidays } from './entities/holidays.entity'; 
import { HolidaysLogs } from './entities/holidayslogs.entity'; 
import { HolidaysSubscriber } from './entities/holidays.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Holidays]), 
		TypeOrmModule.forFeature([HolidaysLogs]), 
	], 
	controllers: [HolidayssController], 
	providers: [HolidayssService, HolidaysSubscriber], 
	exports: [HolidayssService], 
})
export class HolidayssModule {}