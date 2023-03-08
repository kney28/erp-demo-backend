import { InjectRepository } from '@nestjs/typeorm'; 
import { ClsService } from 'nestjs-cls'; 
import { 
	DataSource, 
	DeepPartial, 
	EntitySubscriberInterface, 
	EventSubscriber, 
	InsertEvent, 
	Repository, 
	SoftRemoveEvent, 
	UpdateEvent, 
} from 'typeorm'; 
import { Accountingentries } from './accountingentries.entity'; 
import { LogAccountingentriesType, AccountingentriesLogs } from './accountingentrieslogs.entity'; 

@EventSubscriber() 
export class AccountingentriesSubscriber 
	implements EntitySubscriberInterface<Accountingentries> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(AccountingentriesLogs) 
    private accountingentrieslogsRepository: Repository<AccountingentriesLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Accountingentries; 
	} 

	createLog( 
		type: LogAccountingentriesType, 
		event: 
			| InsertEvent<Accountingentries> 
			| UpdateEvent<Accountingentries> 
			| SoftRemoveEvent<Accountingentries>, 
	) { 
		const accountingentrieslog: DeepPartial<AccountingentriesLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const accountingentrieslogs: AccountingentriesLogs = 
			this.accountingentrieslogsRepository.create(accountingentrieslog); 
		this.accountingentrieslogsRepository.save(accountingentrieslogs); 
	} 

	afterInsert(event: InsertEvent<Accountingentries>) { 
		this.createLog(LogAccountingentriesType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Accountingentries>) { 
		this.createLog(LogAccountingentriesType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Accountingentries>) { 
		this.createLog(LogAccountingentriesType.DELETE, event); 
	} 
}