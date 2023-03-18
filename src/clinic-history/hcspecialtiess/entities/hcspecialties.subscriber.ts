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
import { Hcspecialties } from './hcspecialties.entity'; 
import { LogHcspecialtiesType, HcspecialtiesLogs } from './hcspecialtieslogs.entity'; 

@EventSubscriber() 
export class HcspecialtiesSubscriber 
	implements EntitySubscriberInterface<Hcspecialties> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(HcspecialtiesLogs) 
    private hcspecialtieslogsRepository: Repository<HcspecialtiesLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Hcspecialties; 
	} 

	createLog( 
		type: LogHcspecialtiesType, 
		event: 
			| InsertEvent<Hcspecialties> 
			| UpdateEvent<Hcspecialties> 
			| SoftRemoveEvent<Hcspecialties>, 
	) { 
		const hcspecialtieslog: DeepPartial<HcspecialtiesLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const hcspecialtieslogs: HcspecialtiesLogs = 
			this.hcspecialtieslogsRepository.create(hcspecialtieslog); 
		this.hcspecialtieslogsRepository.save(hcspecialtieslogs); 
	} 

	afterInsert(event: InsertEvent<Hcspecialties>) { 
		this.createLog(LogHcspecialtiesType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Hcspecialties>) { 
		this.createLog(LogHcspecialtiesType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Hcspecialties>) { 
		this.createLog(LogHcspecialtiesType.DELETE, event); 
	} 
}