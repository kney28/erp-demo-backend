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
import { Tscasreccon } from './tscasreccon.entity'; 
import { LogTscasrecconType, TscasrecconLogs } from './tscasrecconlogs.entity'; 

@EventSubscriber() 
export class TscasrecconSubscriber 
	implements EntitySubscriberInterface<Tscasreccon> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(TscasrecconLogs) 
    private tscasrecconlogsRepository: Repository<TscasrecconLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Tscasreccon; 
	} 

	createLog( 
		type: LogTscasrecconType, 
		event: 
			| InsertEvent<Tscasreccon> 
			| UpdateEvent<Tscasreccon> 
			| SoftRemoveEvent<Tscasreccon>, 
	) { 
		const tscasrecconlog: DeepPartial<TscasrecconLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const tscasrecconlogs: TscasrecconLogs = 
			this.tscasrecconlogsRepository.create(tscasrecconlog); 
		this.tscasrecconlogsRepository.save(tscasrecconlogs); 
	} 

	afterInsert(event: InsertEvent<Tscasreccon>) { 
		this.createLog(LogTscasrecconType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Tscasreccon>) { 
		this.createLog(LogTscasrecconType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Tscasreccon>) { 
		this.createLog(LogTscasrecconType.DELETE, event); 
	} 
}