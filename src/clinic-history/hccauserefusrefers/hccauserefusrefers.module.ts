import { Module } from '@nestjs/common'; 
import { HccauserefusrefersService } from './hccauserefusrefers.service'; 
import { HccauserefusrefersController } from './hccauserefusrefers.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Hccauserefusrefer } from './entities/hccauserefusrefer.entity'; 
import { HccauserefusreferLogs } from './entities/hccauserefusreferlogs.entity'; 
import { HccauserefusreferSubscriber } from './entities/hccauserefusrefer.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Hccauserefusrefer]), 
		TypeOrmModule.forFeature([HccauserefusreferLogs]), 
	], 
	controllers: [HccauserefusrefersController], 
	providers: [HccauserefusrefersService, HccauserefusreferSubscriber], 
	exports: [HccauserefusrefersService], 
})
export class HccauserefusrefersModule {}