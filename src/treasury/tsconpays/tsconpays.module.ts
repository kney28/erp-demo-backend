import { Module } from '@nestjs/common'; 
import { TsconpaysService } from './tsconpays.service'; 
import { TsconpaysController } from './tsconpays.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Tsconpay } from './entities/tsconpay.entity'; 
import { TsconpayLogs } from './entities/tsconpaylogs.entity'; 
import { TsconpaySubscriber } from './entities/tsconpay.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Tsconpay]), 
		TypeOrmModule.forFeature([TsconpayLogs]), 
	], 
	controllers: [TsconpaysController], 
	providers: [TsconpaysService, TsconpaySubscriber], 
	exports: [TsconpaysService], 
})
export class TsconpaysModule {}