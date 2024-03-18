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
import { Bed } from './bed.entity'; 
import { LogBedType, BedLogs } from './bedlogs.entity'; 

@EventSubscriber() 
export class BedSubscriber 
	implements EntitySubscriberInterface<Bed> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(BedLogs) 
    private bedlogsRepository: Repository<BedLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Bed; 
	} 

	createLog( 
		type: LogBedType, 
		event: 
			| InsertEvent<Bed> 
			| UpdateEvent<Bed> 
			| SoftRemoveEvent<Bed>, 
	) { 
		const bedlog: DeepPartial<BedLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const bedlogs: BedLogs = 
			this.bedlogsRepository.create(bedlog); 
		this.bedlogsRepository.save(bedlogs); 
	} 

	afterInsert(event: InsertEvent<Bed>) { 
		this.createLog(LogBedType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Bed>) { 
		this.createLog(LogBedType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Bed>) { 
		this.createLog(LogBedType.DELETE, event); 
	} 
}