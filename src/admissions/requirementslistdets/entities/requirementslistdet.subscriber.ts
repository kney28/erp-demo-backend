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
import { Requirementslistdet } from './requirementslistdet.entity'; 
import { LogRequirementslistdetType, RequirementslistdetLogs } from './requirementslistdetlogs.entity'; 

@EventSubscriber() 
export class RequirementslistdetSubscriber 
	implements EntitySubscriberInterface<Requirementslistdet> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(RequirementslistdetLogs) 
    private requirementslistdetlogsRepository: Repository<RequirementslistdetLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Requirementslistdet; 
	} 

	createLog( 
		type: LogRequirementslistdetType, 
		event: 
			| InsertEvent<Requirementslistdet> 
			| UpdateEvent<Requirementslistdet> 
			| SoftRemoveEvent<Requirementslistdet>, 
	) { 
		const requirementslistdetlog: DeepPartial<RequirementslistdetLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const requirementslistdetlogs: RequirementslistdetLogs = 
			this.requirementslistdetlogsRepository.create(requirementslistdetlog); 
		this.requirementslistdetlogsRepository.save(requirementslistdetlogs); 
	} 

	afterInsert(event: InsertEvent<Requirementslistdet>) { 
		this.createLog(LogRequirementslistdetType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Requirementslistdet>) { 
		this.createLog(LogRequirementslistdetType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Requirementslistdet>) { 
		this.createLog(LogRequirementslistdetType.DELETE, event); 
	} 
}
