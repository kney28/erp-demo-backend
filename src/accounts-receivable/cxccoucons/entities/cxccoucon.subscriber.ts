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
import { Cxccoucon } from './cxccoucon.entity'; 
import { LogCxccouconType, CxccouconLogs } from './cxccouconlogs.entity'; 

@EventSubscriber() 
export class CxccouconSubscriber 
	implements EntitySubscriberInterface<Cxccoucon> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(CxccouconLogs) 
    private cxccouconlogsRepository: Repository<CxccouconLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Cxccoucon; 
	} 

	createLog( 
		type: LogCxccouconType, 
		event: 
			| InsertEvent<Cxccoucon> 
			| UpdateEvent<Cxccoucon> 
			| SoftRemoveEvent<Cxccoucon>, 
	) { 
		const cxccouconlog: DeepPartial<CxccouconLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const cxccouconlogs: CxccouconLogs = 
			this.cxccouconlogsRepository.create(cxccouconlog); 
		this.cxccouconlogsRepository.save(cxccouconlogs); 
	} 

	afterInsert(event: InsertEvent<Cxccoucon>) { 
		this.createLog(LogCxccouconType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Cxccoucon>) { 
		this.createLog(LogCxccouconType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Cxccoucon>) { 
		this.createLog(LogCxccouconType.DELETE, event); 
	} 
}