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
import { Erp_modules } from './erp_modules.entity'; 
import { LogErp_modulesType, Erp_modulesLogs } from './erp_moduleslogs.entity'; 

@EventSubscriber() 
export class Erp_modulesSubscriber 
	implements EntitySubscriberInterface<Erp_modules> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(Erp_modulesLogs) 
    private erp_moduleslogsRepository: Repository<Erp_modulesLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Erp_modules; 
	} 

	createLog( 
		type: LogErp_modulesType, 
		event: 
			| InsertEvent<Erp_modules> 
			| UpdateEvent<Erp_modules> 
			| SoftRemoveEvent<Erp_modules>, 
	) { 
		const erp_moduleslog: DeepPartial<Erp_modulesLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const erp_moduleslogs: Erp_modulesLogs = 
			this.erp_moduleslogsRepository.create(erp_moduleslog); 
		this.erp_moduleslogsRepository.save(erp_moduleslogs); 
	} 

	afterInsert(event: InsertEvent<Erp_modules>) { 
		this.createLog(LogErp_modulesType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Erp_modules>) { 
		this.createLog(LogErp_modulesType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Erp_modules>) { 
		this.createLog(LogErp_modulesType.DELETE, event); 
	} 
}