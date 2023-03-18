import { Module } from '@nestjs/common'; 
import { AccountingentriessService } from './accountingentriess.service'; 
import { AccountingentriessController } from './accountingentriess.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Accountingentries } from './entities/accountingentries.entity'; 
import { AccountingentriesLogs } from './entities/accountingentrieslogs.entity'; 
import { AccountingentriesSubscriber } from './entities/accountingentries.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Accountingentries]), 
		TypeOrmModule.forFeature([AccountingentriesLogs]), 
	], 
	controllers: [AccountingentriessController], 
	providers: [AccountingentriessService, AccountingentriesSubscriber], 
	exports: [AccountingentriessService], 
})
export class AccountingentriessModule {}