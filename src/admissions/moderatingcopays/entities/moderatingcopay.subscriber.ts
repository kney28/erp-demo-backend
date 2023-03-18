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
import { Moderatingcopay } from './moderatingcopay.entity'; 
import { LogModeratingcopayType, ModeratingcopayLogs } from './moderatingcopaylogs.entity'; 

@EventSubscriber() 
export class ModeratingcopaySubscriber 
	implements EntitySubscriberInterface<Moderatingcopay> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(ModeratingcopayLogs) 
    private moderatingcopaylogsRepository: Repository<ModeratingcopayLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Moderatingcopay; 
	} 

	createLog( 
		type: LogModeratingcopayType, 
		event: 
			| InsertEvent<Moderatingcopay> 
			| UpdateEvent<Moderatingcopay> 
			| SoftRemoveEvent<Moderatingcopay>, 
	) { 
		const moderatingcopaylog: DeepPartial<ModeratingcopayLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const moderatingcopaylogs: ModeratingcopayLogs = 
			this.moderatingcopaylogsRepository.create(moderatingcopaylog); 
		this.moderatingcopaylogsRepository.save(moderatingcopaylogs); 
	} 

	afterInsert(event: InsertEvent<Moderatingcopay>) { 
		this.createLog(LogModeratingcopayType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Moderatingcopay>) { 
		this.createLog(LogModeratingcopayType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Moderatingcopay>) { 
		this.createLog(LogModeratingcopayType.DELETE, event); 
	} 
}