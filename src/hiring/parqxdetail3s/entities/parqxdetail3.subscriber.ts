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
import { Parqxdetail3 } from './parqxdetail3.entity'; 
import { LogParqxdetail3Type, Parqxdetail3Logs } from './parqxdetail3logs.entity'; 

@EventSubscriber() 
export class Parqxdetail3Subscriber 
	implements EntitySubscriberInterface<Parqxdetail3> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(Parqxdetail3Logs) 
    private parqxdetail3logsRepository: Repository<Parqxdetail3Logs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Parqxdetail3; 
	} 

	createLog( 
		type: LogParqxdetail3Type, 
		event: 
			| InsertEvent<Parqxdetail3> 
			| UpdateEvent<Parqxdetail3> 
			| SoftRemoveEvent<Parqxdetail3>, 
	) { 
		const parqxdetail3log: DeepPartial<Parqxdetail3Logs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const parqxdetail3logs: Parqxdetail3Logs = 
			this.parqxdetail3logsRepository.create(parqxdetail3log); 
		this.parqxdetail3logsRepository.save(parqxdetail3logs); 
	} 

	afterInsert(event: InsertEvent<Parqxdetail3>) { 
		this.createLog(LogParqxdetail3Type.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Parqxdetail3>) { 
		this.createLog(LogParqxdetail3Type.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Parqxdetail3>) { 
		this.createLog(LogParqxdetail3Type.DELETE, event); 
	} 
}