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
import { Tsdiscon } from './tsdiscon.entity'; 
import { LogTsdisconType, TsdisconLogs } from './tsdisconlogs.entity'; 

@EventSubscriber() 
export class TsdisconSubscriber 
	implements EntitySubscriberInterface<Tsdiscon> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(TsdisconLogs) 
    private tsdisconlogsRepository: Repository<TsdisconLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Tsdiscon; 
	} 

	createLog( 
		type: LogTsdisconType, 
		event: 
			| InsertEvent<Tsdiscon> 
			| UpdateEvent<Tsdiscon> 
			| SoftRemoveEvent<Tsdiscon>, 
	) { 
		const tsdisconlog: DeepPartial<TsdisconLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const tsdisconlogs: TsdisconLogs = 
			this.tsdisconlogsRepository.create(tsdisconlog); 
		this.tsdisconlogsRepository.save(tsdisconlogs); 
	} 

	afterInsert(event: InsertEvent<Tsdiscon>) { 
		this.createLog(LogTsdisconType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Tsdiscon>) { 
		this.createLog(LogTsdisconType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Tsdiscon>) { 
		this.createLog(LogTsdisconType.DELETE, event); 
	} 
}