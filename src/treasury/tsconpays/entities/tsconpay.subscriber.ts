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
import { Tsconpay } from './tsconpay.entity'; 
import { LogTsconpayType, TsconpayLogs } from './tsconpaylogs.entity'; 

@EventSubscriber() 
export class TsconpaySubscriber 
	implements EntitySubscriberInterface<Tsconpay> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(TsconpayLogs) 
    private tsconpaylogsRepository: Repository<TsconpayLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Tsconpay; 
	} 

	createLog( 
		type: LogTsconpayType, 
		event: 
			| InsertEvent<Tsconpay> 
			| UpdateEvent<Tsconpay> 
			| SoftRemoveEvent<Tsconpay>, 
	) { 
		const tsconpaylog: DeepPartial<TsconpayLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const tsconpaylogs: TsconpayLogs = 
			this.tsconpaylogsRepository.create(tsconpaylog); 
		this.tsconpaylogsRepository.save(tsconpaylogs); 
	} 

	afterInsert(event: InsertEvent<Tsconpay>) { 
		this.createLog(LogTsconpayType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Tsconpay>) { 
		this.createLog(LogTsconpayType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Tsconpay>) { 
		this.createLog(LogTsconpayType.DELETE, event); 
	} 
}