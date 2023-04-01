import { Module } from '@nestjs/common'; 
import { PercentajeqxdetsService } from './percentajeqxdets.service'; 
import { PercentajeqxdetsController } from './percentajeqxdets.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Percentajeqxdet } from './entities/percentajeqxdet.entity'; 
import { PercentajeqxdetLogs } from './entities/percentajeqxdetlogs.entity'; 
import { PercentajeqxdetSubscriber } from './entities/percentajeqxdet.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Percentajeqxdet]), 
		TypeOrmModule.forFeature([PercentajeqxdetLogs]), 
	], 
	controllers: [PercentajeqxdetsController], 
	providers: [PercentajeqxdetsService, PercentajeqxdetSubscriber], 
	exports: [PercentajeqxdetsService], 
})
export class PercentajeqxdetsModule {}