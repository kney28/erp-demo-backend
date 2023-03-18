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
import { Appreacan } from './appreacan.entity'; 
import { LogAppreacanType, AppreacanLogs } from './appreacanlogs.entity'; 

@EventSubscriber() 
export class AppreacanSubscriber 
	implements EntitySubscriberInterface<Appreacan> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(AppreacanLogs) 
    private appreacanlogsRepository: Repository<AppreacanLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Appreacan; 
	} 

	createLog( 
		type: LogAppreacanType, 
		event: 
			| InsertEvent<Appreacan> 
			| UpdateEvent<Appreacan> 
			| SoftRemoveEvent<Appreacan>, 
	) { 
		const appreacanlog: DeepPartial<AppreacanLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const appreacanlogs: AppreacanLogs = 
			this.appreacanlogsRepository.create(appreacanlog); 
		this.appreacanlogsRepository.save(appreacanlogs); 
	} 

	afterInsert(event: InsertEvent<Appreacan>) { 
		this.createLog(LogAppreacanType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Appreacan>) { 
		this.createLog(LogAppreacanType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Appreacan>) { 
		this.createLog(LogAppreacanType.DELETE, event); 
	} 
}