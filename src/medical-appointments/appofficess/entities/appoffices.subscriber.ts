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
import { Appoffices } from './appoffices.entity'; 
import { LogAppofficesType, AppofficesLogs } from './appofficeslogs.entity'; 

@EventSubscriber() 
export class AppofficesSubscriber 
	implements EntitySubscriberInterface<Appoffices> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(AppofficesLogs) 
    private appofficeslogsRepository: Repository<AppofficesLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Appoffices; 
	} 

	createLog( 
		type: LogAppofficesType, 
		event: 
			| InsertEvent<Appoffices> 
			| UpdateEvent<Appoffices> 
			| SoftRemoveEvent<Appoffices>, 
	) { 
		const appofficeslog: DeepPartial<AppofficesLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const appofficeslogs: AppofficesLogs = 
			this.appofficeslogsRepository.create(appofficeslog); 
		this.appofficeslogsRepository.save(appofficeslogs); 
	} 

	afterInsert(event: InsertEvent<Appoffices>) { 
		this.createLog(LogAppofficesType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Appoffices>) { 
		this.createLog(LogAppofficesType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Appoffices>) { 
		this.createLog(LogAppofficesType.DELETE, event); 
	} 
}