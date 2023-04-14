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
import { Hcclassanestrecord } from './hcclassanestrecord.entity'; 
import { LogHcclassanestrecordType, HcclassanestrecordLogs } from './hcclassanestrecordlogs.entity'; 

@EventSubscriber() 
export class HcclassanestrecordSubscriber 
	implements EntitySubscriberInterface<Hcclassanestrecord> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(HcclassanestrecordLogs) 
    private hcclassanestrecordlogsRepository: Repository<HcclassanestrecordLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Hcclassanestrecord; 
	} 

	createLog( 
		type: LogHcclassanestrecordType, 
		event: 
			| InsertEvent<Hcclassanestrecord> 
			| UpdateEvent<Hcclassanestrecord> 
			| SoftRemoveEvent<Hcclassanestrecord>, 
	) { 
		const hcclassanestrecordlog: DeepPartial<HcclassanestrecordLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const hcclassanestrecordlogs: HcclassanestrecordLogs = 
			this.hcclassanestrecordlogsRepository.create(hcclassanestrecordlog); 
		this.hcclassanestrecordlogsRepository.save(hcclassanestrecordlogs); 
	} 

	afterInsert(event: InsertEvent<Hcclassanestrecord>) { 
		this.createLog(LogHcclassanestrecordType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Hcclassanestrecord>) { 
		this.createLog(LogHcclassanestrecordType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Hcclassanestrecord>) { 
		this.createLog(LogHcclassanestrecordType.DELETE, event); 
	} 
}