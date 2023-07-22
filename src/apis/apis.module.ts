import { Module } from '@nestjs/common'; 
import { ApisService } from './apis.service'; 
import { ApisController } from './apis.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Api } from './entities/api.entity'; 
import { ApiLogs } from './entities/apilogs.entity'; 
import { ApiSubscriber } from './entities/api.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Api]), 
		TypeOrmModule.forFeature([ApiLogs]), 
	], 
	controllers: [ApisController], 
	providers: [ApisService, ApiSubscriber], 
	exports: [ApisService], 
})
export class ApisModule {}