import { Module } from '@nestjs/common'; 
import { GroundsdenialcaresService } from './groundsdenialcares.service'; 
import { GroundsdenialcaresController } from './groundsdenialcares.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Groundsdenialcare } from './entities/groundsdenialcare.entity'; 
import { GroundsdenialcareLogs } from './entities/groundsdenialcarelogs.entity'; 
import { GroundsdenialcareSubscriber } from './entities/groundsdenialcare.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Groundsdenialcare]), 
		TypeOrmModule.forFeature([GroundsdenialcareLogs]), 
	], 
	controllers: [GroundsdenialcaresController], 
	providers: [GroundsdenialcaresService, GroundsdenialcareSubscriber], 
	exports: [GroundsdenialcaresService], 
})
export class GroundsdenialcaresModule {}