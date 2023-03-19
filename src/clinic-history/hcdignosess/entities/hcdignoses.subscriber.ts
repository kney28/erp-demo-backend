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
import { Hcdignoses } from './hcdignoses.entity'; 
import { LogHcdignosesType, HcdignosesLogs } from './hcdignoseslogs.entity'; 

@EventSubscriber() 
export class HcdignosesSubscriber 
	implements EntitySubscriberInterface<Hcdignoses> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(HcdignosesLogs) 
    private hcdignoseslogsRepository: Repository<HcdignosesLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Hcdignoses; 
	} 

	createLog( 
		type: LogHcdignosesType, 
		event: 
			| InsertEvent<Hcdignoses> 
			| UpdateEvent<Hcdignoses> 
			| SoftRemoveEvent<Hcdignoses>, 
	) { 
		const hcdignoseslog: DeepPartial<HcdignosesLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const hcdignoseslogs: HcdignosesLogs = 
			this.hcdignoseslogsRepository.create(hcdignoseslog); 
		this.hcdignoseslogsRepository.save(hcdignoseslogs); 
	} 

	afterInsert(event: InsertEvent<Hcdignoses>) { 
		this.createLog(LogHcdignosesType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Hcdignoses>) { 
		this.createLog(LogHcdignosesType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Hcdignoses>) { 
		this.createLog(LogHcdignosesType.DELETE, event); 
	} 
}