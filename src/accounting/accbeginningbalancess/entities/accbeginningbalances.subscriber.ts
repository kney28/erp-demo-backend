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
import { Accbeginningbalances } from './accbeginningbalances.entity'; 
import { LogAccbeginningbalancesType, AccbeginningbalancesLogs } from './accbeginningbalanceslogs.entity'; 

@EventSubscriber() 
export class AccbeginningbalancesSubscriber 
	implements EntitySubscriberInterface<Accbeginningbalances> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(AccbeginningbalancesLogs) 
    private accbeginningbalanceslogsRepository: Repository<AccbeginningbalancesLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Accbeginningbalances; 
	} 

	createLog( 
		type: LogAccbeginningbalancesType, 
		event: 
			| InsertEvent<Accbeginningbalances> 
			| UpdateEvent<Accbeginningbalances> 
			| SoftRemoveEvent<Accbeginningbalances>, 
	) { 
		const accbeginningbalanceslog: DeepPartial<AccbeginningbalancesLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const accbeginningbalanceslogs: AccbeginningbalancesLogs = 
			this.accbeginningbalanceslogsRepository.create(accbeginningbalanceslog); 
		this.accbeginningbalanceslogsRepository.save(accbeginningbalanceslogs); 
	} 

	afterInsert(event: InsertEvent<Accbeginningbalances>) { 
		this.createLog(LogAccbeginningbalancesType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Accbeginningbalances>) { 
		this.createLog(LogAccbeginningbalancesType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Accbeginningbalances>) { 
		this.createLog(LogAccbeginningbalancesType.DELETE, event); 
	} 
}