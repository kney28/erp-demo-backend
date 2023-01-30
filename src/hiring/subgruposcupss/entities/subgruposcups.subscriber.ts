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
import { Subgruposcups } from './subgruposcups.entity'; 
import { LogSubgruposcupsType, SubgruposcupsLogs } from './subgruposcupslogs.entity'; 

@EventSubscriber() 
export class SubgruposcupsSubscriber 
	implements EntitySubscriberInterface<Subgruposcups> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(SubgruposcupsLogs) 
    private subgruposcupslogsRepository: Repository<SubgruposcupsLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Subgruposcups; 
	} 

	createLog( 
		type: LogSubgruposcupsType, 
		event: 
			| InsertEvent<Subgruposcups> 
			| UpdateEvent<Subgruposcups> 
			| SoftRemoveEvent<Subgruposcups>, 
	) { 
		const subgruposcupslog: DeepPartial<SubgruposcupsLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const subgruposcupslogs: SubgruposcupsLogs = 
			this.subgruposcupslogsRepository.create(subgruposcupslog); 
		this.subgruposcupslogsRepository.save(subgruposcupslogs); 
	} 

	afterInsert(event: InsertEvent<Subgruposcups>) { 
		this.createLog(LogSubgruposcupsType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Subgruposcups>) { 
		this.createLog(LogSubgruposcupsType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Subgruposcups>) { 
		this.createLog(LogSubgruposcupsType.DELETE, event); 
	} 
}