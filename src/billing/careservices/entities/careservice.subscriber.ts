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
import { Careservice } from './careservice.entity'; 
import { LogCareserviceType, CareserviceLogs } from './careservicelogs.entity'; 

@EventSubscriber() 
export class CareserviceSubscriber 
	implements EntitySubscriberInterface<Careservice> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(CareserviceLogs) 
    private careservicelogsRepository: Repository<CareserviceLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Careservice; 
	} 

	createLog( 
		type: LogCareserviceType, 
		event: 
			| InsertEvent<Careservice> 
			| UpdateEvent<Careservice> 
			| SoftRemoveEvent<Careservice>, 
	) { 
		const careservicelog: DeepPartial<CareserviceLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const careservicelogs: CareserviceLogs = 
			this.careservicelogsRepository.create(careservicelog); 
		this.careservicelogsRepository.save(careservicelogs); 
	} 

	afterInsert(event: InsertEvent<Careservice>) { 
		this.createLog(LogCareserviceType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Careservice>) { 
		this.createLog(LogCareserviceType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Careservice>) { 
		this.createLog(LogCareserviceType.DELETE, event); 
	} 
}