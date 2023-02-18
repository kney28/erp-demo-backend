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
import { Acccostcenters } from './acccostcenters.entity'; 
import { LogAcccostcentersType, AcccostcentersLogs } from './acccostcenterslogs.entity'; 

@EventSubscriber() 
export class AcccostcentersSubscriber 
	implements EntitySubscriberInterface<Acccostcenters> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(AcccostcentersLogs) 
    private acccostcenterslogsRepository: Repository<AcccostcentersLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Acccostcenters; 
	} 

	createLog( 
		type: LogAcccostcentersType, 
		event: 
			| InsertEvent<Acccostcenters> 
			| UpdateEvent<Acccostcenters> 
			| SoftRemoveEvent<Acccostcenters>, 
	) { 
		const acccostcenterslog: DeepPartial<AcccostcentersLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const acccostcenterslogs: AcccostcentersLogs = 
			this.acccostcenterslogsRepository.create(acccostcenterslog); 
		this.acccostcenterslogsRepository.save(acccostcenterslogs); 
	} 

	afterInsert(event: InsertEvent<Acccostcenters>) { 
		this.createLog(LogAcccostcentersType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Acccostcenters>) { 
		this.createLog(LogAcccostcentersType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Acccostcenters>) { 
		this.createLog(LogAcccostcentersType.DELETE, event); 
	} 
}