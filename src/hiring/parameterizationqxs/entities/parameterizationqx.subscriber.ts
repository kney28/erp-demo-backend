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
import { Parameterizationqx } from './parameterizationqx.entity'; 
import { LogParameterizationqxType, ParameterizationqxLogs } from './parameterizationqxlogs.entity'; 

@EventSubscriber() 
export class ParameterizationqxSubscriber 
	implements EntitySubscriberInterface<Parameterizationqx> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(ParameterizationqxLogs) 
    private parameterizationqxlogsRepository: Repository<ParameterizationqxLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Parameterizationqx; 
	} 

	createLog( 
		type: LogParameterizationqxType, 
		event: 
			| InsertEvent<Parameterizationqx> 
			| UpdateEvent<Parameterizationqx> 
			| SoftRemoveEvent<Parameterizationqx>, 
	) { 
		const parameterizationqxlog: DeepPartial<ParameterizationqxLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const parameterizationqxlogs: ParameterizationqxLogs = 
			this.parameterizationqxlogsRepository.create(parameterizationqxlog); 
		this.parameterizationqxlogsRepository.save(parameterizationqxlogs); 
	} 

	afterInsert(event: InsertEvent<Parameterizationqx>) { 
		this.createLog(LogParameterizationqxType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Parameterizationqx>) { 
		this.createLog(LogParameterizationqxType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Parameterizationqx>) { 
		this.createLog(LogParameterizationqxType.DELETE, event); 
	} 
}