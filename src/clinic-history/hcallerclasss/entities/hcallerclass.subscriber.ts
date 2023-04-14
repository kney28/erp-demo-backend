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
import { Hcallerclass } from './hcallerclass.entity'; 
import { LogHcallerclassType, HcallerclassLogs } from './hcallerclasslogs.entity'; 

@EventSubscriber() 
export class HcallerclassSubscriber 
	implements EntitySubscriberInterface<Hcallerclass> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(HcallerclassLogs) 
    private hcallerclasslogsRepository: Repository<HcallerclassLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Hcallerclass; 
	} 

	createLog( 
		type: LogHcallerclassType, 
		event: 
			| InsertEvent<Hcallerclass> 
			| UpdateEvent<Hcallerclass> 
			| SoftRemoveEvent<Hcallerclass>, 
	) { 
		const hcallerclasslog: DeepPartial<HcallerclassLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const hcallerclasslogs: HcallerclassLogs = 
			this.hcallerclasslogsRepository.create(hcallerclasslog); 
		this.hcallerclasslogsRepository.save(hcallerclasslogs); 
	} 

	afterInsert(event: InsertEvent<Hcallerclass>) { 
		this.createLog(LogHcallerclassType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Hcallerclass>) { 
		this.createLog(LogHcallerclassType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Hcallerclass>) { 
		this.createLog(LogHcallerclassType.DELETE, event); 
	} 
}