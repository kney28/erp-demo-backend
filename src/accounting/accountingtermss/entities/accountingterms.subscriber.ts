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
import { Accountingterms } from './accountingterms.entity'; 
import { LogAccountingtermsType, AccountingtermsLogs } from './accountingtermslogs.entity'; 

@EventSubscriber() 
export class AccountingtermsSubscriber 
	implements EntitySubscriberInterface<Accountingterms> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(AccountingtermsLogs) 
    private accountingtermslogsRepository: Repository<AccountingtermsLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Accountingterms; 
	} 

	createLog( 
		type: LogAccountingtermsType, 
		event: 
			| InsertEvent<Accountingterms> 
			| UpdateEvent<Accountingterms> 
			| SoftRemoveEvent<Accountingterms>, 
	) { 
		const accountingtermslog: DeepPartial<AccountingtermsLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const accountingtermslogs: AccountingtermsLogs = 
			this.accountingtermslogsRepository.create(accountingtermslog); 
		this.accountingtermslogsRepository.save(accountingtermslogs); 
	} 

	afterInsert(event: InsertEvent<Accountingterms>) { 
		this.createLog(LogAccountingtermsType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Accountingterms>) { 
		this.createLog(LogAccountingtermsType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Accountingterms>) { 
		this.createLog(LogAccountingtermsType.DELETE, event); 
	} 
}