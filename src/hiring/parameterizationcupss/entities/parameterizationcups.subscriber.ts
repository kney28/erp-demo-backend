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
import { Parameterizationcups } from './parameterizationcups.entity'; 
import { LogParameterizationcupsType, ParameterizationcupsLogs } from './parameterizationcupslogs.entity'; 

@EventSubscriber() 
export class ParameterizationcupsSubscriber 
	implements EntitySubscriberInterface<Parameterizationcups> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(ParameterizationcupsLogs) 
    private parameterizationcupslogsRepository: Repository<ParameterizationcupsLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Parameterizationcups; 
	} 

	createLog( 
		type: LogParameterizationcupsType, 
		event: 
			| InsertEvent<Parameterizationcups> 
			| UpdateEvent<Parameterizationcups> 
			| SoftRemoveEvent<Parameterizationcups>, 
	) { 
		const parameterizationcupslog: DeepPartial<ParameterizationcupsLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const parameterizationcupslogs: ParameterizationcupsLogs = 
			this.parameterizationcupslogsRepository.create(parameterizationcupslog); 
		this.parameterizationcupslogsRepository.save(parameterizationcupslogs); 
	} 

	afterInsert(event: InsertEvent<Parameterizationcups>) { 
		this.createLog(LogParameterizationcupsType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Parameterizationcups>) { 
		this.createLog(LogParameterizationcupsType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Parameterizationcups>) { 
		this.createLog(LogParameterizationcupsType.DELETE, event); 
	} 
}