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
import { Accinicialrun } from './accinicialrun.entity'; 
import { LogAccinicialrunType, AccinicialrunLogs } from './accinicialrunlogs.entity'; 

@EventSubscriber() 
export class AccinicialrunSubscriber 
	implements EntitySubscriberInterface<Accinicialrun> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(AccinicialrunLogs) 
    private accinicialrunlogsRepository: Repository<AccinicialrunLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Accinicialrun; 
	} 

	createLog( 
		type: LogAccinicialrunType, 
		event: 
			| InsertEvent<Accinicialrun> 
			| UpdateEvent<Accinicialrun> 
			| SoftRemoveEvent<Accinicialrun>, 
	) { 
		const accinicialrunlog: DeepPartial<AccinicialrunLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const accinicialrunlogs: AccinicialrunLogs = 
			this.accinicialrunlogsRepository.create(accinicialrunlog); 
		this.accinicialrunlogsRepository.save(accinicialrunlogs); 
	} 

	afterInsert(event: InsertEvent<Accinicialrun>) { 
		this.createLog(LogAccinicialrunType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Accinicialrun>) { 
		this.createLog(LogAccinicialrunType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Accinicialrun>) { 
		this.createLog(LogAccinicialrunType.DELETE, event); 
	} 
}