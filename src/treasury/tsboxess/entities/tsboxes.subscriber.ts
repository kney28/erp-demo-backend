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
import { Tsboxes } from './tsboxes.entity'; 
import { LogTsboxesType, TsboxesLogs } from './tsboxeslogs.entity'; 

@EventSubscriber() 
export class TsboxesSubscriber 
	implements EntitySubscriberInterface<Tsboxes> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(TsboxesLogs) 
    private tsboxeslogsRepository: Repository<TsboxesLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Tsboxes; 
	} 

	createLog( 
		type: LogTsboxesType, 
		event: 
			| InsertEvent<Tsboxes> 
			| UpdateEvent<Tsboxes> 
			| SoftRemoveEvent<Tsboxes>, 
	) { 
		const tsboxeslog: DeepPartial<TsboxesLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const tsboxeslogs: TsboxesLogs = 
			this.tsboxeslogsRepository.create(tsboxeslog); 
		this.tsboxeslogsRepository.save(tsboxeslogs); 
	} 

	afterInsert(event: InsertEvent<Tsboxes>) { 
		this.createLog(LogTsboxesType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Tsboxes>) { 
		this.createLog(LogTsboxesType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Tsboxes>) { 
		this.createLog(LogTsboxesType.DELETE, event); 
	} 
}