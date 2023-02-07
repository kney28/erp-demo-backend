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
import { Acccongen } from './acccongen.entity'; 
import { LogAcccongenType, AcccongenLogs } from './acccongenlogs.entity'; 

@EventSubscriber() 
export class AcccongenSubscriber 
	implements EntitySubscriberInterface<Acccongen> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(AcccongenLogs) 
    private acccongenlogsRepository: Repository<AcccongenLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Acccongen; 
	} 

	createLog( 
		type: LogAcccongenType, 
		event: 
			| InsertEvent<Acccongen> 
			| UpdateEvent<Acccongen> 
			| SoftRemoveEvent<Acccongen>, 
	) { 
		const acccongenlog: DeepPartial<AcccongenLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const acccongenlogs: AcccongenLogs = 
			this.acccongenlogsRepository.create(acccongenlog); 
		this.acccongenlogsRepository.save(acccongenlogs); 
	} 

	afterInsert(event: InsertEvent<Acccongen>) { 
		this.createLog(LogAcccongenType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Acccongen>) { 
		this.createLog(LogAcccongenType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Acccongen>) { 
		this.createLog(LogAcccongenType.DELETE, event); 
	} 
}