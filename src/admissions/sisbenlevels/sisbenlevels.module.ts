import { Module } from '@nestjs/common'; 
import { SisbenlevelsService } from './sisbenlevels.service'; 
import { SisbenlevelsController } from './sisbenlevels.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Sisbenlevel } from './entities/sisbenlevel.entity'; 
import { SisbenlevelLogs } from './entities/sisbenlevellogs.entity'; 
import { SisbenlevelSubscriber } from './entities/sisbenlevel.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Sisbenlevel]), 
		TypeOrmModule.forFeature([SisbenlevelLogs]), 
	], 
	controllers: [SisbenlevelsController], 
	providers: [SisbenlevelsService, SisbenlevelSubscriber], 
	exports: [SisbenlevelsService], 
})
export class SisbenlevelsModule {}