import { Module } from '@nestjs/common'; 
import { AccountingentriesdetsService } from './accountingentriesdets.service'; 
import { AccountingentriesdetsController } from './accountingentriesdets.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Accountingentriesdet } from './entities/accountingentriesdet.entity'; 
import { AccountingentriesdetLogs } from './entities/accountingentriesdetlogs.entity'; 
import { AccountingentriesdetSubscriber } from './entities/accountingentriesdet.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Accountingentriesdet]), 
		TypeOrmModule.forFeature([AccountingentriesdetLogs]), 
	], 
	controllers: [AccountingentriesdetsController], 
	providers: [AccountingentriesdetsService, AccountingentriesdetSubscriber], 
	exports: [AccountingentriesdetsService], 
})
export class AccountingentriesdetsModule {}