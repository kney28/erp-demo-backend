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
import { Healthservice } from './healthservice.entity'; 
import { LogHealthserviceType, HealthserviceLogs } from './healthservicelogs.entity'; 

@EventSubscriber() 
export class HealthserviceSubscriber 
	implements EntitySubscriberInterface<Healthservice> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(HealthserviceLogs) 
    private healthservicelogsRepository: Repository<HealthserviceLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Healthservice; 
	} 

	createLog( 
		type: LogHealthserviceType, 
		event: 
			| InsertEvent<Healthservice> 
			| UpdateEvent<Healthservice> 
			| SoftRemoveEvent<Healthservice>, 
	) { 
		const healthservicelog: DeepPartial<HealthserviceLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const healthservicelogs: HealthserviceLogs = 
			this.healthservicelogsRepository.create(healthservicelog); 
		this.healthservicelogsRepository.save(healthservicelogs); 
	} 

	afterInsert(event: InsertEvent<Healthservice>) { 
		this.createLog(LogHealthserviceType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Healthservice>) { 
		this.createLog(LogHealthserviceType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Healthservice>) { 
		this.createLog(LogHealthserviceType.DELETE, event); 
	} 
}