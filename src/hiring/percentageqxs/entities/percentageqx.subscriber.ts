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
import { Percentageqx } from './percentageqx.entity'; 
import { LogPercentageqxType, PercentageqxLogs } from './percentageqxlogs.entity'; 

@EventSubscriber() 
export class PercentageqxSubscriber 
	implements EntitySubscriberInterface<Percentageqx> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(PercentageqxLogs) 
    private percentageqxlogsRepository: Repository<PercentageqxLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Percentageqx; 
	} 

	createLog( 
		type: LogPercentageqxType, 
		event: 
			| InsertEvent<Percentageqx> 
			| UpdateEvent<Percentageqx> 
			| SoftRemoveEvent<Percentageqx>, 
	) { 
		const percentageqxlog: DeepPartial<PercentageqxLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const percentageqxlogs: PercentageqxLogs = 
			this.percentageqxlogsRepository.create(percentageqxlog); 
		this.percentageqxlogsRepository.save(percentageqxlogs); 
	} 

	afterInsert(event: InsertEvent<Percentageqx>) { 
		this.createLog(LogPercentageqxType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Percentageqx>) { 
		this.createLog(LogPercentageqxType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Percentageqx>) { 
		this.createLog(LogPercentageqxType.DELETE, event); 
	} 
}