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
import { Accbeginningbalancesdet } from './accbeginningbalancesdet.entity'; 
import { LogAccbeginningbalancesdetType, AccbeginningbalancesdetLogs } from './accbeginningbalancesdetlogs.entity'; 

@EventSubscriber() 
export class AccbeginningbalancesdetSubscriber 
	implements EntitySubscriberInterface<Accbeginningbalancesdet> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(AccbeginningbalancesdetLogs) 
    private accbeginningbalancesdetlogsRepository: Repository<AccbeginningbalancesdetLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Accbeginningbalancesdet; 
	} 

	createLog( 
		type: LogAccbeginningbalancesdetType, 
		event: 
			| InsertEvent<Accbeginningbalancesdet> 
			| UpdateEvent<Accbeginningbalancesdet> 
			| SoftRemoveEvent<Accbeginningbalancesdet>, 
	) { 
		const accbeginningbalancesdetlog: DeepPartial<AccbeginningbalancesdetLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const accbeginningbalancesdetlogs: AccbeginningbalancesdetLogs = 
			this.accbeginningbalancesdetlogsRepository.create(accbeginningbalancesdetlog); 
		this.accbeginningbalancesdetlogsRepository.save(accbeginningbalancesdetlogs); 
	} 

	afterInsert(event: InsertEvent<Accbeginningbalancesdet>) { 
		this.createLog(LogAccbeginningbalancesdetType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Accbeginningbalancesdet>) { 
		this.createLog(LogAccbeginningbalancesdetType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Accbeginningbalancesdet>) { 
		this.createLog(LogAccbeginningbalancesdetType.DELETE, event); 
	} 
}