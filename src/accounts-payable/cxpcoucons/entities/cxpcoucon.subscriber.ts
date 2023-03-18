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
import { Cxpcoucon } from './cxpcoucon.entity'; 
import { LogCxpcouconType, CxpcouconLogs } from './cxpcouconlogs.entity'; 

@EventSubscriber() 
export class CxpcouconSubscriber 
	implements EntitySubscriberInterface<Cxpcoucon> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(CxpcouconLogs) 
    private cxpcouconlogsRepository: Repository<CxpcouconLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Cxpcoucon; 
	} 

	createLog( 
		type: LogCxpcouconType, 
		event: 
			| InsertEvent<Cxpcoucon> 
			| UpdateEvent<Cxpcoucon> 
			| SoftRemoveEvent<Cxpcoucon>, 
	) { 
		const cxpcouconlog: DeepPartial<CxpcouconLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const cxpcouconlogs: CxpcouconLogs = 
			this.cxpcouconlogsRepository.create(cxpcouconlog); 
		this.cxpcouconlogsRepository.save(cxpcouconlogs); 
	} 

	afterInsert(event: InsertEvent<Cxpcoucon>) { 
		this.createLog(LogCxpcouconType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Cxpcoucon>) { 
		this.createLog(LogCxpcouconType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Cxpcoucon>) { 
		this.createLog(LogCxpcouconType.DELETE, event); 
	} 
}