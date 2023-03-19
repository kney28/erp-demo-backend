import { Module } from '@nestjs/common'; 
import { AcccongensService } from './acccongens.service'; 
import { AcccongensController } from './acccongens.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Acccongen } from './entities/acccongen.entity'; 
import { AcccongenLogs } from './entities/acccongenlogs.entity'; 
import { AcccongenSubscriber } from './entities/acccongen.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Acccongen]), 
		TypeOrmModule.forFeature([AcccongenLogs]), 
	], 
	controllers: [AcccongensController], 
	providers: [AcccongensService, AcccongenSubscriber], 
	exports: [AcccongensService], 
})
export class AcccongensModule {}