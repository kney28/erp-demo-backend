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
import { Hccauserefusrefer } from './hccauserefusrefer.entity'; 
import { LogHccauserefusreferType, HccauserefusreferLogs } from './hccauserefusreferlogs.entity'; 

@EventSubscriber() 
export class HccauserefusreferSubscriber 
	implements EntitySubscriberInterface<Hccauserefusrefer> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(HccauserefusreferLogs) 
    private hccauserefusreferlogsRepository: Repository<HccauserefusreferLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Hccauserefusrefer; 
	} 

	createLog( 
		type: LogHccauserefusreferType, 
		event: 
			| InsertEvent<Hccauserefusrefer> 
			| UpdateEvent<Hccauserefusrefer> 
			| SoftRemoveEvent<Hccauserefusrefer>, 
	) { 
		const hccauserefusreferlog: DeepPartial<HccauserefusreferLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const hccauserefusreferlogs: HccauserefusreferLogs = 
			this.hccauserefusreferlogsRepository.create(hccauserefusreferlog); 
		this.hccauserefusreferlogsRepository.save(hccauserefusreferlogs); 
	} 

	afterInsert(event: InsertEvent<Hccauserefusrefer>) { 
		this.createLog(LogHccauserefusreferType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Hccauserefusrefer>) { 
		this.createLog(LogHccauserefusreferType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Hccauserefusrefer>) { 
		this.createLog(LogHccauserefusreferType.DELETE, event); 
	} 
}