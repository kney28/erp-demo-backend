import { Module } from '@nestjs/common'; 
import { ParameterizationqxsService } from './parameterizationqxs.service'; 
import { ParameterizationqxsController } from './parameterizationqxs.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Parameterizationqx } from './entities/parameterizationqx.entity'; 
import { ParameterizationqxLogs } from './entities/parameterizationqxlogs.entity'; 
import { ParameterizationqxSubscriber } from './entities/parameterizationqx.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Parameterizationqx]), 
		TypeOrmModule.forFeature([ParameterizationqxLogs]), 
	], 
	controllers: [ParameterizationqxsController], 
	providers: [ParameterizationqxsService, ParameterizationqxSubscriber], 
	exports: [ParameterizationqxsService], 
})
export class ParameterizationqxsModule {}