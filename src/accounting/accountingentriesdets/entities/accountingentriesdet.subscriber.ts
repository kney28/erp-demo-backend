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
import { Accountingentriesdet } from './accountingentriesdet.entity'; 
import { LogAccountingentriesdetType, AccountingentriesdetLogs } from './accountingentriesdetlogs.entity'; 

@EventSubscriber() 
export class AccountingentriesdetSubscriber 
	implements EntitySubscriberInterface<Accountingentriesdet> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(AccountingentriesdetLogs) 
    private accountingentriesdetlogsRepository: Repository<AccountingentriesdetLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Accountingentriesdet; 
	} 

	createLog( 
		type: LogAccountingentriesdetType, 
		event: 
			| InsertEvent<Accountingentriesdet> 
			| UpdateEvent<Accountingentriesdet> 
			| SoftRemoveEvent<Accountingentriesdet>, 
	) { 
		const accountingentriesdetlog: DeepPartial<AccountingentriesdetLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const accountingentriesdetlogs: AccountingentriesdetLogs = 
			this.accountingentriesdetlogsRepository.create(accountingentriesdetlog); 
		this.accountingentriesdetlogsRepository.save(accountingentriesdetlogs); 
	} 

	afterInsert(event: InsertEvent<Accountingentriesdet>) { 
		this.createLog(LogAccountingentriesdetType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Accountingentriesdet>) { 
		this.createLog(LogAccountingentriesdetType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Accountingentriesdet>) { 
		this.createLog(LogAccountingentriesdetType.DELETE, event); 
	} 
}