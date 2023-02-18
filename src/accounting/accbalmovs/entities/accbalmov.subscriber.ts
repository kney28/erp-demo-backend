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
import { Accbalmov } from './accbalmov.entity'; 
import { LogAccbalmovType, AccbalmovLogs } from './accbalmovlogs.entity'; 

@EventSubscriber() 
export class AccbalmovSubscriber 
	implements EntitySubscriberInterface<Accbalmov> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(AccbalmovLogs) 
    private accbalmovlogsRepository: Repository<AccbalmovLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Accbalmov; 
	} 

	createLog( 
		type: LogAccbalmovType, 
		event: 
			| InsertEvent<Accbalmov> 
			| UpdateEvent<Accbalmov> 
			| SoftRemoveEvent<Accbalmov>, 
	) { 
		const accbalmovlog: DeepPartial<AccbalmovLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const accbalmovlogs: AccbalmovLogs = 
			this.accbalmovlogsRepository.create(accbalmovlog); 
		this.accbalmovlogsRepository.save(accbalmovlogs); 
	} 

	afterInsert(event: InsertEvent<Accbalmov>) { 
		this.createLog(LogAccbalmovType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Accbalmov>) { 
		this.createLog(LogAccbalmovType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Accbalmov>) { 
		this.createLog(LogAccbalmovType.DELETE, event); 
	} 
}