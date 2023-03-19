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
import { Goocla } from './goocla.entity'; 
import { LogGooclaType, GooclaLogs } from './gooclalogs.entity'; 

@EventSubscriber() 
export class GooclaSubscriber 
	implements EntitySubscriberInterface<Goocla> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(GooclaLogs) 
    private gooclalogsRepository: Repository<GooclaLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Goocla; 
	} 

	createLog( 
		type: LogGooclaType, 
		event: 
			| InsertEvent<Goocla> 
			| UpdateEvent<Goocla> 
			| SoftRemoveEvent<Goocla>, 
	) { 
		const gooclalog: DeepPartial<GooclaLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const gooclalogs: GooclaLogs = 
			this.gooclalogsRepository.create(gooclalog); 
		this.gooclalogsRepository.save(gooclalogs); 
	} 

	afterInsert(event: InsertEvent<Goocla>) { 
		this.createLog(LogGooclaType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Goocla>) { 
		this.createLog(LogGooclaType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Goocla>) { 
		this.createLog(LogGooclaType.DELETE, event); 
	} 
}