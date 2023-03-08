import { Module } from '@nestjs/common'; 
import { AccinicialrunsService } from './accinicialruns.service'; 
import { AccinicialrunsController } from './accinicialruns.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Accinicialrun } from './entities/accinicialrun.entity'; 
import { AccinicialrunLogs } from './entities/accinicialrunlogs.entity'; 
import { AccinicialrunSubscriber } from './entities/accinicialrun.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Accinicialrun]), 
		TypeOrmModule.forFeature([AccinicialrunLogs]), 
	], 
	controllers: [AccinicialrunsController], 
	providers: [AccinicialrunsService, AccinicialrunSubscriber], 
	exports: [AccinicialrunsService], 
})
export class AccinicialrunsModule {}