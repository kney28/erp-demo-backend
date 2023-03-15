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
import { Tsbanks } from './tsbanks.entity'; 
import { LogTsbanksType, TsbanksLogs } from './tsbankslogs.entity'; 

@EventSubscriber() 
export class TsbanksSubscriber 
	implements EntitySubscriberInterface<Tsbanks> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(TsbanksLogs) 
    private tsbankslogsRepository: Repository<TsbanksLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Tsbanks; 
	} 

	createLog( 
		type: LogTsbanksType, 
		event: 
			| InsertEvent<Tsbanks> 
			| UpdateEvent<Tsbanks> 
			| SoftRemoveEvent<Tsbanks>, 
	) { 
		const tsbankslog: DeepPartial<TsbanksLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const tsbankslogs: TsbanksLogs = 
			this.tsbankslogsRepository.create(tsbankslog); 
		this.tsbankslogsRepository.save(tsbankslogs); 
	} 

	afterInsert(event: InsertEvent<Tsbanks>) { 
		this.createLog(LogTsbanksType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Tsbanks>) { 
		this.createLog(LogTsbanksType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Tsbanks>) { 
		this.createLog(LogTsbanksType.DELETE, event); 
	} 
}