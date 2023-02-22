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
import { Hchealthpro } from './hchealthpro.entity'; 
import { LogHchealthproType, HchealthproLogs } from './hchealthprologs.entity'; 

@EventSubscriber() 
export class HchealthproSubscriber 
	implements EntitySubscriberInterface<Hchealthpro> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(HchealthproLogs) 
    private hchealthprologsRepository: Repository<HchealthproLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Hchealthpro; 
	} 

	createLog( 
		type: LogHchealthproType, 
		event: 
			| InsertEvent<Hchealthpro> 
			| UpdateEvent<Hchealthpro> 
			| SoftRemoveEvent<Hchealthpro>, 
	) { 
		const hchealthprolog: DeepPartial<HchealthproLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const hchealthprologs: HchealthproLogs = 
			this.hchealthprologsRepository.create(hchealthprolog); 
		this.hchealthprologsRepository.save(hchealthprologs); 
	} 

	afterInsert(event: InsertEvent<Hchealthpro>) { 
		this.createLog(LogHchealthproType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Hchealthpro>) { 
		this.createLog(LogHchealthproType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Hchealthpro>) { 
		this.createLog(LogHchealthproType.DELETE, event); 
	} 
}