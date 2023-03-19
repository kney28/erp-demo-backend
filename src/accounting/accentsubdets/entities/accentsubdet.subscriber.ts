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
import { Accentsubdet } from './accentsubdet.entity'; 
import { LogAccentsubdetType, AccentsubdetLogs } from './accentsubdetlogs.entity'; 

@EventSubscriber() 
export class AccentsubdetSubscriber 
	implements EntitySubscriberInterface<Accentsubdet> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(AccentsubdetLogs) 
    private accentsubdetlogsRepository: Repository<AccentsubdetLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Accentsubdet; 
	} 

	createLog( 
		type: LogAccentsubdetType, 
		event: 
			| InsertEvent<Accentsubdet> 
			| UpdateEvent<Accentsubdet> 
			| SoftRemoveEvent<Accentsubdet>, 
	) { 
		const accentsubdetlog: DeepPartial<AccentsubdetLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const accentsubdetlogs: AccentsubdetLogs = 
			this.accentsubdetlogsRepository.create(accentsubdetlog); 
		this.accentsubdetlogsRepository.save(accentsubdetlogs); 
	} 

	afterInsert(event: InsertEvent<Accentsubdet>) { 
		this.createLog(LogAccentsubdetType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Accentsubdet>) { 
		this.createLog(LogAccentsubdetType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Accentsubdet>) { 
		this.createLog(LogAccentsubdetType.DELETE, event); 
	} 
}