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
import { Preconfigeneral } from './preconfigeneral.entity'; 
import { LogPreconfigeneralType, PreconfigeneralLogs } from './preconfigenerallogs.entity'; 

@EventSubscriber() 
export class PreconfigeneralSubscriber 
	implements EntitySubscriberInterface<Preconfigeneral> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(PreconfigeneralLogs) 
    private preconfigenerallogsRepository: Repository<PreconfigeneralLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Preconfigeneral; 
	} 

	createLog( 
		type: LogPreconfigeneralType, 
		event: 
			| InsertEvent<Preconfigeneral> 
			| UpdateEvent<Preconfigeneral> 
			| SoftRemoveEvent<Preconfigeneral>, 
	) { 
		const preconfigenerallog: DeepPartial<PreconfigeneralLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const preconfigenerallogs: PreconfigeneralLogs = 
			this.preconfigenerallogsRepository.create(preconfigenerallog); 
		this.preconfigenerallogsRepository.save(preconfigenerallogs); 
	} 

	afterInsert(event: InsertEvent<Preconfigeneral>) { 
		this.createLog(LogPreconfigeneralType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Preconfigeneral>) { 
		this.createLog(LogPreconfigeneralType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Preconfigeneral>) { 
		this.createLog(LogPreconfigeneralType.DELETE, event); 
	} 
}