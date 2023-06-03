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
import { Parqxdetail2 } from './parqxdetail2.entity'; 
import { LogParqxdetail2Type, Parqxdetail2Logs } from './parqxdetail2logs.entity'; 

@EventSubscriber() 
export class Parqxdetail2Subscriber 
	implements EntitySubscriberInterface<Parqxdetail2> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(Parqxdetail2Logs) 
    private parqxdetail2logsRepository: Repository<Parqxdetail2Logs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Parqxdetail2; 
	} 

	createLog( 
		type: LogParqxdetail2Type, 
		event: 
			| InsertEvent<Parqxdetail2> 
			| UpdateEvent<Parqxdetail2> 
			| SoftRemoveEvent<Parqxdetail2>, 
	) { 
		const parqxdetail2log: DeepPartial<Parqxdetail2Logs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const parqxdetail2logs: Parqxdetail2Logs = 
			this.parqxdetail2logsRepository.create(parqxdetail2log); 
		this.parqxdetail2logsRepository.save(parqxdetail2logs); 
	} 

	afterInsert(event: InsertEvent<Parqxdetail2>) { 
		this.createLog(LogParqxdetail2Type.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Parqxdetail2>) { 
		this.createLog(LogParqxdetail2Type.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Parqxdetail2>) { 
		this.createLog(LogParqxdetail2Type.DELETE, event); 
	} 
}