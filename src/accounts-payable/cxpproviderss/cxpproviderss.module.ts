import { Module } from '@nestjs/common'; 
import { CxpproviderssService } from './cxpproviderss.service'; 
import { CxpproviderssController } from './cxpproviderss.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Cxpproviders } from './entities/cxpproviders.entity'; 
import { CxpprovidersLogs } from './entities/cxpproviderslogs.entity'; 
import { CxpprovidersSubscriber } from './entities/cxpproviders.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Cxpproviders]), 
		TypeOrmModule.forFeature([CxpprovidersLogs]), 
	], 
	controllers: [CxpproviderssController], 
	providers: [CxpproviderssService, CxpprovidersSubscriber], 
	exports: [CxpproviderssService], 
})
export class CxpproviderssModule {}