import { Module } from '@nestjs/common'; 
import { HeadquarterssService } from './headquarterss.service'; 
import { HeadquarterssController } from './headquarterss.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Headquarters } from './entities/headquarters.entity'; 
import { HeadquartersLogs } from './entities/headquarterslogs.entity'; 
import { HeadquartersSubscriber } from './entities/headquarters.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Headquarters]), 
		TypeOrmModule.forFeature([HeadquartersLogs]), 
	], 
	controllers: [HeadquarterssController], 
	providers: [HeadquarterssService, HeadquartersSubscriber], 
	exports: [HeadquarterssService], 
})
export class HeadquarterssModule {}