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
import { Groundsdenialcare } from './groundsdenialcare.entity'; 
import { LogGroundsdenialcareType, GroundsdenialcareLogs } from './groundsdenialcarelogs.entity'; 

@EventSubscriber() 
export class GroundsdenialcareSubscriber 
	implements EntitySubscriberInterface<Groundsdenialcare> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(GroundsdenialcareLogs) 
    private groundsdenialcarelogsRepository: Repository<GroundsdenialcareLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Groundsdenialcare; 
	} 

	createLog( 
		type: LogGroundsdenialcareType, 
		event: 
			| InsertEvent<Groundsdenialcare> 
			| UpdateEvent<Groundsdenialcare> 
			| SoftRemoveEvent<Groundsdenialcare>, 
	) { 
		const groundsdenialcarelog: DeepPartial<GroundsdenialcareLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const groundsdenialcarelogs: GroundsdenialcareLogs = 
			this.groundsdenialcarelogsRepository.create(groundsdenialcarelog); 
		this.groundsdenialcarelogsRepository.save(groundsdenialcarelogs); 
	} 

	afterInsert(event: InsertEvent<Groundsdenialcare>) { 
		this.createLog(LogGroundsdenialcareType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Groundsdenialcare>) { 
		this.createLog(LogGroundsdenialcareType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Groundsdenialcare>) { 
		this.createLog(LogGroundsdenialcareType.DELETE, event); 
	} 
}