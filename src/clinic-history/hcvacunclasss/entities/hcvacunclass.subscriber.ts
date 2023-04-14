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
import { Hcvacunclass } from './hcvacunclass.entity'; 
import { LogHcvacunclassType, HcvacunclassLogs } from './hcvacunclasslogs.entity'; 

@EventSubscriber() 
export class HcvacunclassSubscriber 
	implements EntitySubscriberInterface<Hcvacunclass> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(HcvacunclassLogs) 
    private hcvacunclasslogsRepository: Repository<HcvacunclassLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Hcvacunclass; 
	} 

	createLog( 
		type: LogHcvacunclassType, 
		event: 
			| InsertEvent<Hcvacunclass> 
			| UpdateEvent<Hcvacunclass> 
			| SoftRemoveEvent<Hcvacunclass>, 
	) { 
		const hcvacunclasslog: DeepPartial<HcvacunclassLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const hcvacunclasslogs: HcvacunclassLogs = 
			this.hcvacunclasslogsRepository.create(hcvacunclasslog); 
		this.hcvacunclasslogsRepository.save(hcvacunclasslogs); 
	} 

	afterInsert(event: InsertEvent<Hcvacunclass>) { 
		this.createLog(LogHcvacunclassType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Hcvacunclass>) { 
		this.createLog(LogHcvacunclassType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Hcvacunclass>) { 
		this.createLog(LogHcvacunclassType.DELETE, event); 
	} 
}