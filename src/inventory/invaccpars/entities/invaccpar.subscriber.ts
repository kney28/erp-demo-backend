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
import { Invaccpar } from './invaccpar.entity'; 
import { LogInvaccparType, InvaccparLogs } from './invaccparlogs.entity'; 

@EventSubscriber() 
export class InvaccparSubscriber 
	implements EntitySubscriberInterface<Invaccpar> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(InvaccparLogs) 
    private invaccparlogsRepository: Repository<InvaccparLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Invaccpar; 
	} 

	createLog( 
		type: LogInvaccparType, 
		event: 
			| InsertEvent<Invaccpar> 
			| UpdateEvent<Invaccpar> 
			| SoftRemoveEvent<Invaccpar>, 
	) { 
		const invaccparlog: DeepPartial<InvaccparLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const invaccparlogs: InvaccparLogs = 
			this.invaccparlogsRepository.create(invaccparlog); 
		this.invaccparlogsRepository.save(invaccparlogs); 
	} 

	afterInsert(event: InsertEvent<Invaccpar>) { 
		this.createLog(LogInvaccparType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Invaccpar>) { 
		this.createLog(LogInvaccparType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Invaccpar>) { 
		this.createLog(LogInvaccparType.DELETE, event); 
	} 
}