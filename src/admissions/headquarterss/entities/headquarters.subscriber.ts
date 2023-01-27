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
import { Headquarters } from './headquarters.entity'; 
import { LogHeadquartersType, HeadquartersLogs } from './headquarterslogs.entity'; 

@EventSubscriber() 
export class HeadquartersSubscriber 
	implements EntitySubscriberInterface<Headquarters> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(HeadquartersLogs) 
    private headquarterslogsRepository: Repository<HeadquartersLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Headquarters; 
	} 

	createLog( 
		type: LogHeadquartersType, 
		event: 
			| InsertEvent<Headquarters> 
			| UpdateEvent<Headquarters> 
			| SoftRemoveEvent<Headquarters>, 
	) { 
		const headquarterslog: DeepPartial<HeadquartersLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const headquarterslogs: HeadquartersLogs = 
			this.headquarterslogsRepository.create(headquarterslog); 
		this.headquarterslogsRepository.save(headquarterslogs); 
	} 

	afterInsert(event: InsertEvent<Headquarters>) { 
		this.createLog(LogHeadquartersType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Headquarters>) { 
		this.createLog(LogHeadquartersType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Headquarters>) { 
		this.createLog(LogHeadquartersType.DELETE, event); 
	} 
}