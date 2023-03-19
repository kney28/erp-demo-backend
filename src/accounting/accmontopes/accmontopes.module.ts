import { Module } from '@nestjs/common'; 
import { AccmontopesService } from './accmontopes.service'; 
import { AccmontopesController } from './accmontopes.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Accmontope } from './entities/accmontope.entity'; 
import { AccmontopeLogs } from './entities/accmontopelogs.entity'; 
import { AccmontopeSubscriber } from './entities/accmontope.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Accmontope]), 
		TypeOrmModule.forFeature([AccmontopeLogs]), 
	], 
	controllers: [AccmontopesController], 
	providers: [AccmontopesService, AccmontopeSubscriber], 
	exports: [AccmontopesService], 
})
export class AccmontopesModule {}