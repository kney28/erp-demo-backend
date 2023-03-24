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
import { Healthadministrator } from './healthadministrator.entity'; 
import { LogHealthadministratorType, HealthadministratorLogs } from './healthadministratorlogs.entity'; 

@EventSubscriber() 
export class HealthadministratorSubscriber 
	implements EntitySubscriberInterface<Healthadministrator> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(HealthadministratorLogs) 
    private healthadministratorlogsRepository: Repository<HealthadministratorLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Healthadministrator; 
	} 

	createLog( 
		type: LogHealthadministratorType, 
		event: 
			| InsertEvent<Healthadministrator> 
			| UpdateEvent<Healthadministrator> 
			| SoftRemoveEvent<Healthadministrator>, 
	) { 
		const healthadministratorlog: DeepPartial<HealthadministratorLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const healthadministratorlogs: HealthadministratorLogs = 
			this.healthadministratorlogsRepository.create(healthadministratorlog); 
		this.healthadministratorlogsRepository.save(healthadministratorlogs); 
	} 

	afterInsert(event: InsertEvent<Healthadministrator>) { 
		this.createLog(LogHealthadministratorType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Healthadministrator>) { 
		this.createLog(LogHealthadministratorType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Healthadministrator>) { 
		this.createLog(LogHealthadministratorType.DELETE, event); 
	} 
}