import { Module } from '@nestjs/common'; 
import { HchealthprosService } from './hchealthpros.service'; 
import { HchealthprosController } from './hchealthpros.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Hchealthpro } from './entities/hchealthpro.entity'; 
import { HchealthproLogs } from './entities/hchealthprologs.entity'; 
import { HchealthproSubscriber } from './entities/hchealthpro.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Hchealthpro]), 
		TypeOrmModule.forFeature([HchealthproLogs]), 
	], 
	controllers: [HchealthprosController], 
	providers: [HchealthprosService, HchealthproSubscriber], 
	exports: [HchealthprosService], 
})
export class HchealthprosModule {}