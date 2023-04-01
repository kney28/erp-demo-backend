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
import { Hcadvereventclass } from './hcadvereventclass.entity'; 
import { LogHcadvereventclassType, HcadvereventclassLogs } from './hcadvereventclasslogs.entity'; 

@EventSubscriber() 
export class HcadvereventclassSubscriber 
	implements EntitySubscriberInterface<Hcadvereventclass> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(HcadvereventclassLogs) 
    private hcadvereventclasslogsRepository: Repository<HcadvereventclassLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Hcadvereventclass; 
	} 

	createLog( 
		type: LogHcadvereventclassType, 
		event: 
			| InsertEvent<Hcadvereventclass> 
			| UpdateEvent<Hcadvereventclass> 
			| SoftRemoveEvent<Hcadvereventclass>, 
	) { 
		const hcadvereventclasslog: DeepPartial<HcadvereventclassLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const hcadvereventclasslogs: HcadvereventclassLogs = 
			this.hcadvereventclasslogsRepository.create(hcadvereventclasslog); 
		this.hcadvereventclasslogsRepository.save(hcadvereventclasslogs); 
	} 

	afterInsert(event: InsertEvent<Hcadvereventclass>) { 
		this.createLog(LogHcadvereventclassType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Hcadvereventclass>) { 
		this.createLog(LogHcadvereventclassType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Hcadvereventclass>) { 
		this.createLog(LogHcadvereventclassType.DELETE, event); 
	} 
}