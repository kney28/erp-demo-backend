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
import { Tsnotcon } from './tsnotcon.entity'; 
import { LogTsnotconType, TsnotconLogs } from './tsnotconlogs.entity'; 

@EventSubscriber() 
export class TsnotconSubscriber 
	implements EntitySubscriberInterface<Tsnotcon> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(TsnotconLogs) 
    private tsnotconlogsRepository: Repository<TsnotconLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Tsnotcon; 
	} 

	createLog( 
		type: LogTsnotconType, 
		event: 
			| InsertEvent<Tsnotcon> 
			| UpdateEvent<Tsnotcon> 
			| SoftRemoveEvent<Tsnotcon>, 
	) { 
		const tsnotconlog: DeepPartial<TsnotconLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const tsnotconlogs: TsnotconLogs = 
			this.tsnotconlogsRepository.create(tsnotconlog); 
		this.tsnotconlogsRepository.save(tsnotconlogs); 
	} 

	afterInsert(event: InsertEvent<Tsnotcon>) { 
		this.createLog(LogTsnotconType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Tsnotcon>) { 
		this.createLog(LogTsnotconType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Tsnotcon>) { 
		this.createLog(LogTsnotconType.DELETE, event); 
	} 
}