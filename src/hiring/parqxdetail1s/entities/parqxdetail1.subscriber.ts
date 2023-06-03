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
import { Parqxdetail1 } from './parqxdetail1.entity'; 
import { LogParqxdetail1Type, Parqxdetail1Logs } from './parqxdetail1logs.entity'; 

@EventSubscriber() 
export class Parqxdetail1Subscriber 
	implements EntitySubscriberInterface<Parqxdetail1> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(Parqxdetail1Logs) 
    private parqxdetail1logsRepository: Repository<Parqxdetail1Logs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Parqxdetail1; 
	} 

	createLog( 
		type: LogParqxdetail1Type, 
		event: 
			| InsertEvent<Parqxdetail1> 
			| UpdateEvent<Parqxdetail1> 
			| SoftRemoveEvent<Parqxdetail1>, 
	) { 
		const parqxdetail1log: DeepPartial<Parqxdetail1Logs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const parqxdetail1logs: Parqxdetail1Logs = 
			this.parqxdetail1logsRepository.create(parqxdetail1log); 
		this.parqxdetail1logsRepository.save(parqxdetail1logs); 
	} 

	afterInsert(event: InsertEvent<Parqxdetail1>) { 
		this.createLog(LogParqxdetail1Type.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Parqxdetail1>) { 
		this.createLog(LogParqxdetail1Type.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Parqxdetail1>) { 
		this.createLog(LogParqxdetail1Type.DELETE, event); 
	} 
}