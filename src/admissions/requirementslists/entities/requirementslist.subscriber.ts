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
import { Requirementslist } from './requirementslist.entity'; 
import { LogRequirementslistType, RequirementslistLogs } from './requirementslistlogs.entity'; 

@EventSubscriber() 
export class RequirementslistSubscriber 
	implements EntitySubscriberInterface<Requirementslist> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(RequirementslistLogs) 
    private requirementslistlogsRepository: Repository<RequirementslistLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Requirementslist; 
	} 

	createLog( 
		type: LogRequirementslistType, 
		event: 
			| InsertEvent<Requirementslist> 
			| UpdateEvent<Requirementslist> 
			| SoftRemoveEvent<Requirementslist>, 
	) { 
		const requirementslistlog: DeepPartial<RequirementslistLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const requirementslistlogs: RequirementslistLogs = 
			this.requirementslistlogsRepository.create(requirementslistlog); 
		this.requirementslistlogsRepository.save(requirementslistlogs); 
	} 

	afterInsert(event: InsertEvent<Requirementslist>) { 
		this.createLog(LogRequirementslistType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Requirementslist>) { 
		this.createLog(LogRequirementslistType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Requirementslist>) { 
		this.createLog(LogRequirementslistType.DELETE, event); 
	} 
}
