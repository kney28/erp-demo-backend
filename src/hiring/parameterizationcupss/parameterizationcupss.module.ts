import { Module } from '@nestjs/common'; 
import { ParameterizationcupssService } from './parameterizationcupss.service'; 
import { ParameterizationcupssController } from './parameterizationcupss.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Parameterizationcups } from './entities/parameterizationcups.entity'; 
import { ParameterizationcupsLogs } from './entities/parameterizationcupslogs.entity'; 
import { ParameterizationcupsSubscriber } from './entities/parameterizationcups.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Parameterizationcups]), 
		TypeOrmModule.forFeature([ParameterizationcupsLogs]), 
	], 
	controllers: [ParameterizationcupssController], 
	providers: [ParameterizationcupssService, ParameterizationcupsSubscriber], 
	exports: [ParameterizationcupssService], 
})
export class ParameterizationcupssModule {}