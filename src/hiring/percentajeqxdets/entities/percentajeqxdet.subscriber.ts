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
import { Percentajeqxdet } from './percentajeqxdet.entity'; 
import { LogPercentajeqxdetType, PercentajeqxdetLogs } from './percentajeqxdetlogs.entity'; 

@EventSubscriber() 
export class PercentajeqxdetSubscriber 
	implements EntitySubscriberInterface<Percentajeqxdet> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(PercentajeqxdetLogs) 
    private percentajeqxdetlogsRepository: Repository<PercentajeqxdetLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Percentajeqxdet; 
	} 

	createLog( 
		type: LogPercentajeqxdetType, 
		event: 
			| InsertEvent<Percentajeqxdet> 
			| UpdateEvent<Percentajeqxdet> 
			| SoftRemoveEvent<Percentajeqxdet>, 
	) { 
		const percentajeqxdetlog: DeepPartial<PercentajeqxdetLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const percentajeqxdetlogs: PercentajeqxdetLogs = 
			this.percentajeqxdetlogsRepository.create(percentajeqxdetlog); 
		this.percentajeqxdetlogsRepository.save(percentajeqxdetlogs); 
	} 

	afterInsert(event: InsertEvent<Percentajeqxdet>) { 
		this.createLog(LogPercentajeqxdetType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Percentajeqxdet>) { 
		this.createLog(LogPercentajeqxdetType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Percentajeqxdet>) { 
		this.createLog(LogPercentajeqxdetType.DELETE, event); 
	} 
}