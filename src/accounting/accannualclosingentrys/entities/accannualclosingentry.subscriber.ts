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
import { Accannualclosingentry } from './accannualclosingentry.entity'; 
import { LogAccannualclosingentryType, AccannualclosingentryLogs } from './accannualclosingentrylogs.entity'; 

@EventSubscriber() 
export class AccannualclosingentrySubscriber 
	implements EntitySubscriberInterface<Accannualclosingentry> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(AccannualclosingentryLogs) 
    private accannualclosingentrylogsRepository: Repository<AccannualclosingentryLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Accannualclosingentry; 
	} 

	createLog( 
		type: LogAccannualclosingentryType, 
		event: 
			| InsertEvent<Accannualclosingentry> 
			| UpdateEvent<Accannualclosingentry> 
			| SoftRemoveEvent<Accannualclosingentry>, 
	) { 
		const accannualclosingentrylog: DeepPartial<AccannualclosingentryLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const accannualclosingentrylogs: AccannualclosingentryLogs = 
			this.accannualclosingentrylogsRepository.create(accannualclosingentrylog); 
		this.accannualclosingentrylogsRepository.save(accannualclosingentrylogs); 
	} 

	afterInsert(event: InsertEvent<Accannualclosingentry>) { 
		this.createLog(LogAccannualclosingentryType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Accannualclosingentry>) { 
		this.createLog(LogAccannualclosingentryType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Accannualclosingentry>) { 
		this.createLog(LogAccannualclosingentryType.DELETE, event); 
	} 
}