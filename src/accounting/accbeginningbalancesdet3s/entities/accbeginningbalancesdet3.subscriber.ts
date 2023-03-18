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
import { Accbeginningbalancesdet3 } from './accbeginningbalancesdet3.entity'; 
import { LogAccbeginningbalancesdet3Type, Accbeginningbalancesdet3Logs } from './accbeginningbalancesdet3logs.entity'; 

@EventSubscriber() 
export class Accbeginningbalancesdet3Subscriber 
	implements EntitySubscriberInterface<Accbeginningbalancesdet3> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(Accbeginningbalancesdet3Logs) 
    private accbeginningbalancesdet3logsRepository: Repository<Accbeginningbalancesdet3Logs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Accbeginningbalancesdet3; 
	} 

	createLog( 
		type: LogAccbeginningbalancesdet3Type, 
		event: 
			| InsertEvent<Accbeginningbalancesdet3> 
			| UpdateEvent<Accbeginningbalancesdet3> 
			| SoftRemoveEvent<Accbeginningbalancesdet3>, 
	) { 
		const accbeginningbalancesdet3log: DeepPartial<Accbeginningbalancesdet3Logs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const accbeginningbalancesdet3logs: Accbeginningbalancesdet3Logs = 
			this.accbeginningbalancesdet3logsRepository.create(accbeginningbalancesdet3log); 
		this.accbeginningbalancesdet3logsRepository.save(accbeginningbalancesdet3logs); 
	} 

	afterInsert(event: InsertEvent<Accbeginningbalancesdet3>) { 
		this.createLog(LogAccbeginningbalancesdet3Type.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Accbeginningbalancesdet3>) { 
		this.createLog(LogAccbeginningbalancesdet3Type.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Accbeginningbalancesdet3>) { 
		this.createLog(LogAccbeginningbalancesdet3Type.DELETE, event); 
	} 
}