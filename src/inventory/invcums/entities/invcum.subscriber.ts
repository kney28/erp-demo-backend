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
import { Invcum } from './invcum.entity'; 
import { LogInvcumType, InvcumLogs } from './invcumlogs.entity'; 

@EventSubscriber() 
export class InvcumSubscriber 
	implements EntitySubscriberInterface<Invcum> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(InvcumLogs) 
    private invcumlogsRepository: Repository<InvcumLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Invcum; 
	} 

	createLog( 
		type: LogInvcumType, 
		event: 
			| InsertEvent<Invcum> 
			| UpdateEvent<Invcum> 
			| SoftRemoveEvent<Invcum>, 
	) { 
		const invcumlog: DeepPartial<InvcumLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const invcumlogs: InvcumLogs = 
			this.invcumlogsRepository.create(invcumlog); 
		this.invcumlogsRepository.save(invcumlogs); 
	} 

	afterInsert(event: InsertEvent<Invcum>) { 
		this.createLog(LogInvcumType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Invcum>) { 
		this.createLog(LogInvcumType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Invcum>) { 
		this.createLog(LogInvcumType.DELETE, event); 
	} 
}