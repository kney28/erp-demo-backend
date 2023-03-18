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
import { Accmonclo } from './accmonclo.entity'; 
import { LogAccmoncloType, AccmoncloLogs } from './accmonclologs.entity'; 

@EventSubscriber() 
export class AccmoncloSubscriber 
	implements EntitySubscriberInterface<Accmonclo> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(AccmoncloLogs) 
    private accmonclologsRepository: Repository<AccmoncloLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Accmonclo; 
	} 

	createLog( 
		type: LogAccmoncloType, 
		event: 
			| InsertEvent<Accmonclo> 
			| UpdateEvent<Accmonclo> 
			| SoftRemoveEvent<Accmonclo>, 
	) { 
		const accmonclolog: DeepPartial<AccmoncloLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const accmonclologs: AccmoncloLogs = 
			this.accmonclologsRepository.create(accmonclolog); 
		this.accmonclologsRepository.save(accmonclologs); 
	} 

	afterInsert(event: InsertEvent<Accmonclo>) { 
		this.createLog(LogAccmoncloType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Accmonclo>) { 
		this.createLog(LogAccmoncloType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Accmonclo>) { 
		this.createLog(LogAccmoncloType.DELETE, event); 
	} 
}