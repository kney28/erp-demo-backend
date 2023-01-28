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
import { Healthproviders } from './healthproviders.entity'; 
import { LogHealthprovidersType, HealthprovidersLogs } from './healthproviderslogs.entity'; 

@EventSubscriber() 
export class HealthprovidersSubscriber 
	implements EntitySubscriberInterface<Healthproviders> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(HealthprovidersLogs) 
    private healthproviderslogsRepository: Repository<HealthprovidersLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Healthproviders; 
	} 

	createLog( 
		type: LogHealthprovidersType, 
		event: 
			| InsertEvent<Healthproviders> 
			| UpdateEvent<Healthproviders> 
			| SoftRemoveEvent<Healthproviders>, 
	) { 
		const healthproviderslog: DeepPartial<HealthprovidersLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const healthproviderslogs: HealthprovidersLogs = 
			this.healthproviderslogsRepository.create(healthproviderslog); 
		this.healthproviderslogsRepository.save(healthproviderslogs); 
	} 

	afterInsert(event: InsertEvent<Healthproviders>) { 
		this.createLog(LogHealthprovidersType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Healthproviders>) { 
		this.createLog(LogHealthprovidersType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Healthproviders>) { 
		this.createLog(LogHealthprovidersType.DELETE, event); 
	} 
}