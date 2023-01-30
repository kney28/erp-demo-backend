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
import { Subcatcups } from './subcatcups.entity'; 
import { LogSubcatcupsType, SubcatcupsLogs } from './subcatcupslogs.entity'; 

@EventSubscriber() 
export class SubcatcupsSubscriber 
	implements EntitySubscriberInterface<Subcatcups> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(SubcatcupsLogs) 
    private subcatcupslogsRepository: Repository<SubcatcupsLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Subcatcups; 
	} 

	createLog( 
		type: LogSubcatcupsType, 
		event: 
			| InsertEvent<Subcatcups> 
			| UpdateEvent<Subcatcups> 
			| SoftRemoveEvent<Subcatcups>, 
	) { 
		const subcatcupslog: DeepPartial<SubcatcupsLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const subcatcupslogs: SubcatcupsLogs = 
			this.subcatcupslogsRepository.create(subcatcupslog); 
		this.subcatcupslogsRepository.save(subcatcupslogs); 
	} 

	afterInsert(event: InsertEvent<Subcatcups>) { 
		this.createLog(LogSubcatcupsType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Subcatcups>) { 
		this.createLog(LogSubcatcupsType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Subcatcups>) { 
		this.createLog(LogSubcatcupsType.DELETE, event); 
	} 
}