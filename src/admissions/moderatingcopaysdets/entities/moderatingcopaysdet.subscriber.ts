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
import { Moderatingcopaysdet } from './moderatingcopaysdet.entity'; 
import { LogModeratingcopaysdetType, ModeratingcopaysdetLogs } from './moderatingcopaysdetlogs.entity'; 

@EventSubscriber() 
export class ModeratingcopaysdetSubscriber 
	implements EntitySubscriberInterface<Moderatingcopaysdet> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(ModeratingcopaysdetLogs) 
    private moderatingcopaysdetlogsRepository: Repository<ModeratingcopaysdetLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Moderatingcopaysdet; 
	} 

	createLog( 
		type: LogModeratingcopaysdetType, 
		event: 
			| InsertEvent<Moderatingcopaysdet> 
			| UpdateEvent<Moderatingcopaysdet> 
			| SoftRemoveEvent<Moderatingcopaysdet>, 
	) { 
		const moderatingcopaysdetlog: DeepPartial<ModeratingcopaysdetLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const moderatingcopaysdetlogs: ModeratingcopaysdetLogs = 
			this.moderatingcopaysdetlogsRepository.create(moderatingcopaysdetlog); 
		this.moderatingcopaysdetlogsRepository.save(moderatingcopaysdetlogs); 
	} 

	afterInsert(event: InsertEvent<Moderatingcopaysdet>) { 
		this.createLog(LogModeratingcopaysdetType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Moderatingcopaysdet>) { 
		this.createLog(LogModeratingcopaysdetType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Moderatingcopaysdet>) { 
		this.createLog(LogModeratingcopaysdetType.DELETE, event); 
	} 
}