import { Module } from '@nestjs/common'; 
import { PretypincsService } from './pretypincs.service'; 
import { PretypincsController } from './pretypincs.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Pretypinc } from './entities/pretypinc.entity'; 
import { PretypincLogs } from './entities/pretypinclogs.entity'; 
import { PretypincSubscriber } from './entities/pretypinc.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Pretypinc]), 
		TypeOrmModule.forFeature([PretypincLogs]), 
	], 
	controllers: [PretypincsController], 
	providers: [PretypincsService, PretypincSubscriber], 
	exports: [PretypincsService], 
})
export class PretypincsModule {}