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
import { Sisbenlevel } from './sisbenlevel.entity'; 
import { LogSisbenlevelType, SisbenlevelLogs } from './sisbenlevellogs.entity'; 

@EventSubscriber() 
export class SisbenlevelSubscriber 
	implements EntitySubscriberInterface<Sisbenlevel> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(SisbenlevelLogs) 
    private sisbenlevellogsRepository: Repository<SisbenlevelLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Sisbenlevel; 
	} 

	createLog( 
		type: LogSisbenlevelType, 
		event: 
			| InsertEvent<Sisbenlevel> 
			| UpdateEvent<Sisbenlevel> 
			| SoftRemoveEvent<Sisbenlevel>, 
	) { 
		const sisbenlevellog: DeepPartial<SisbenlevelLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const sisbenlevellogs: SisbenlevelLogs = 
			this.sisbenlevellogsRepository.create(sisbenlevellog); 
		this.sisbenlevellogsRepository.save(sisbenlevellogs); 
	} 

	afterInsert(event: InsertEvent<Sisbenlevel>) { 
		this.createLog(LogSisbenlevelType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Sisbenlevel>) { 
		this.createLog(LogSisbenlevelType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Sisbenlevel>) { 
		this.createLog(LogSisbenlevelType.DELETE, event); 
	} 
}