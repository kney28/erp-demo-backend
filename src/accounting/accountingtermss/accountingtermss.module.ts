import { Module } from '@nestjs/common'; 
import { AccountingtermssService } from './accountingtermss.service'; 
import { AccountingtermssController } from './accountingtermss.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Accountingterms } from './entities/accountingterms.entity'; 
import { AccountingtermsLogs } from './entities/accountingtermslogs.entity'; 
import { AccountingtermsSubscriber } from './entities/accountingterms.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Accountingterms]), 
		TypeOrmModule.forFeature([AccountingtermsLogs]), 
	], 
	controllers: [AccountingtermssController], 
	providers: [AccountingtermssService, AccountingtermsSubscriber], 
	exports: [AccountingtermssService], 
})
export class AccountingtermssModule {}