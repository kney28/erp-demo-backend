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
import { Accbeginningbalancesdet2 } from './accbeginningbalancesdet2.entity'; 
import { LogAccbeginningbalancesdet2Type, Accbeginningbalancesdet2Logs } from './accbeginningbalancesdet2logs.entity'; 

@EventSubscriber() 
export class Accbeginningbalancesdet2Subscriber 
	implements EntitySubscriberInterface<Accbeginningbalancesdet2> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(Accbeginningbalancesdet2Logs) 
    private accbeginningbalancesdet2logsRepository: Repository<Accbeginningbalancesdet2Logs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Accbeginningbalancesdet2; 
	} 

	createLog( 
		type: LogAccbeginningbalancesdet2Type, 
		event: 
			| InsertEvent<Accbeginningbalancesdet2> 
			| UpdateEvent<Accbeginningbalancesdet2> 
			| SoftRemoveEvent<Accbeginningbalancesdet2>, 
	) { 
		const accbeginningbalancesdet2log: DeepPartial<Accbeginningbalancesdet2Logs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const accbeginningbalancesdet2logs: Accbeginningbalancesdet2Logs = 
			this.accbeginningbalancesdet2logsRepository.create(accbeginningbalancesdet2log); 
		this.accbeginningbalancesdet2logsRepository.save(accbeginningbalancesdet2logs); 
	} 

	afterInsert(event: InsertEvent<Accbeginningbalancesdet2>) { 
		this.createLog(LogAccbeginningbalancesdet2Type.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Accbeginningbalancesdet2>) { 
		this.createLog(LogAccbeginningbalancesdet2Type.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Accbeginningbalancesdet2>) { 
		this.createLog(LogAccbeginningbalancesdet2Type.DELETE, event); 
	} 
}