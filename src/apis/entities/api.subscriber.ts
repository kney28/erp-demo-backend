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
import { Api } from './api.entity'; 
import { LogApiType, ApiLogs } from './apilogs.entity'; 

@EventSubscriber() 
export class ApiSubscriber 
	implements EntitySubscriberInterface<Api> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(ApiLogs) 
    private apilogsRepository: Repository<ApiLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Api; 
	} 

	createLog( 
		type: LogApiType, 
		event: 
			| InsertEvent<Api> 
			| UpdateEvent<Api> 
			| SoftRemoveEvent<Api>, 
	) { 
		const apilog: DeepPartial<ApiLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const apilogs: ApiLogs = 
			this.apilogsRepository.create(apilog); 
		this.apilogsRepository.save(apilogs); 
	} 

	afterInsert(event: InsertEvent<Api>) { 
		this.createLog(LogApiType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Api>) { 
		this.createLog(LogApiType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Api>) { 
		this.createLog(LogApiType.DELETE, event); 
	} 
}