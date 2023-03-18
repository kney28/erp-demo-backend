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
import { Cxpproviders } from './cxpproviders.entity'; 
import { LogCxpprovidersType, CxpprovidersLogs } from './cxpproviderslogs.entity'; 

@EventSubscriber() 
export class CxpprovidersSubscriber 
	implements EntitySubscriberInterface<Cxpproviders> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(CxpprovidersLogs) 
    private cxpproviderslogsRepository: Repository<CxpprovidersLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Cxpproviders; 
	} 

	createLog( 
		type: LogCxpprovidersType, 
		event: 
			| InsertEvent<Cxpproviders> 
			| UpdateEvent<Cxpproviders> 
			| SoftRemoveEvent<Cxpproviders>, 
	) { 
		const cxpproviderslog: DeepPartial<CxpprovidersLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const cxpproviderslogs: CxpprovidersLogs = 
			this.cxpproviderslogsRepository.create(cxpproviderslog); 
		this.cxpproviderslogsRepository.save(cxpproviderslogs); 
	} 

	afterInsert(event: InsertEvent<Cxpproviders>) { 
		this.createLog(LogCxpprovidersType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Cxpproviders>) { 
		this.createLog(LogCxpprovidersType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Cxpproviders>) { 
		this.createLog(LogCxpprovidersType.DELETE, event); 
	} 
}