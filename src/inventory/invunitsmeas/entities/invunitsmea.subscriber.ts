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
import { Invunitsmea } from './invunitsmea.entity'; 
import { LogInvunitsmeaType, InvunitsmeaLogs } from './invunitsmealogs.entity'; 

@EventSubscriber() 
export class InvunitsmeaSubscriber 
	implements EntitySubscriberInterface<Invunitsmea> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(InvunitsmeaLogs) 
    private invunitsmealogsRepository: Repository<InvunitsmeaLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Invunitsmea; 
	} 

	createLog( 
		type: LogInvunitsmeaType, 
		event: 
			| InsertEvent<Invunitsmea> 
			| UpdateEvent<Invunitsmea> 
			| SoftRemoveEvent<Invunitsmea>, 
	) { 
		const invunitsmealog: DeepPartial<InvunitsmeaLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const invunitsmealogs: InvunitsmeaLogs = 
			this.invunitsmealogsRepository.create(invunitsmealog); 
		this.invunitsmealogsRepository.save(invunitsmealogs); 
	} 

	afterInsert(event: InsertEvent<Invunitsmea>) { 
		this.createLog(LogInvunitsmeaType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Invunitsmea>) { 
		this.createLog(LogInvunitsmeaType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Invunitsmea>) { 
		this.createLog(LogInvunitsmeaType.DELETE, event); 
	} 
}