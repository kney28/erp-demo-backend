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
import { Consecutivecontrolvalidities } from './consecutivecontrolvalidities.entity'; 
import { LogConsecutivecontrolvaliditiesType, ConsecutivecontrolvaliditiesLogs } from './consecutivecontrolvaliditieslogs.entity'; 

@EventSubscriber() 
export class ConsecutivecontrolvaliditiesSubscriber 
	implements EntitySubscriberInterface<Consecutivecontrolvalidities> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(ConsecutivecontrolvaliditiesLogs) 
    private consecutivecontrolvaliditieslogsRepository: Repository<ConsecutivecontrolvaliditiesLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Consecutivecontrolvalidities; 
	} 

	createLog( 
		type: LogConsecutivecontrolvaliditiesType, 
		event: 
			| InsertEvent<Consecutivecontrolvalidities> 
			| UpdateEvent<Consecutivecontrolvalidities> 
			| SoftRemoveEvent<Consecutivecontrolvalidities>, 
	) { 
		const consecutivecontrolvaliditieslog: DeepPartial<ConsecutivecontrolvaliditiesLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const consecutivecontrolvaliditieslogs: ConsecutivecontrolvaliditiesLogs = 
			this.consecutivecontrolvaliditieslogsRepository.create(consecutivecontrolvaliditieslog); 
		this.consecutivecontrolvaliditieslogsRepository.save(consecutivecontrolvaliditieslogs); 
	} 

	afterInsert(event: InsertEvent<Consecutivecontrolvalidities>) { 
		this.createLog(LogConsecutivecontrolvaliditiesType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Consecutivecontrolvalidities>) { 
		this.createLog(LogConsecutivecontrolvaliditiesType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Consecutivecontrolvalidities>) { 
		this.createLog(LogConsecutivecontrolvaliditiesType.DELETE, event); 
	} 
}