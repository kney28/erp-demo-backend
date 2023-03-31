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
import { Pretypexp } from './pretypexp.entity'; 
import { LogPretypexpType, PretypexpLogs } from './pretypexplogs.entity'; 

@EventSubscriber() 
export class PretypexpSubscriber 
	implements EntitySubscriberInterface<Pretypexp> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(PretypexpLogs) 
    private pretypexplogsRepository: Repository<PretypexpLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Pretypexp; 
	} 

	createLog( 
		type: LogPretypexpType, 
		event: 
			| InsertEvent<Pretypexp> 
			| UpdateEvent<Pretypexp> 
			| SoftRemoveEvent<Pretypexp>, 
	) { 
		const pretypexplog: DeepPartial<PretypexpLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const pretypexplogs: PretypexpLogs = 
			this.pretypexplogsRepository.create(pretypexplog); 
		this.pretypexplogsRepository.save(pretypexplogs); 
	} 

	afterInsert(event: InsertEvent<Pretypexp>) { 
		this.createLog(LogPretypexpType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Pretypexp>) { 
		this.createLog(LogPretypexpType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Pretypexp>) { 
		this.createLog(LogPretypexpType.DELETE, event); 
	} 
}