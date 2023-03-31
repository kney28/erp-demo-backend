import { Module } from '@nestjs/common'; 
import { PretypexpsService } from './pretypexps.service'; 
import { PretypexpsController } from './pretypexps.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Pretypexp } from './entities/pretypexp.entity'; 
import { PretypexpLogs } from './entities/pretypexplogs.entity'; 
import { PretypexpSubscriber } from './entities/pretypexp.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Pretypexp]), 
		TypeOrmModule.forFeature([PretypexpLogs]), 
	], 
	controllers: [PretypexpsController], 
	providers: [PretypexpsService, PretypexpSubscriber], 
	exports: [PretypexpsService], 
})
export class PretypexpsModule {}