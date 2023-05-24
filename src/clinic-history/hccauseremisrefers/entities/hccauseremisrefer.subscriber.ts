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
import { Hccauseremisrefer } from './hccauseremisrefer.entity'; 
import { LogHccauseremisreferType, HccauseremisreferLogs } from './hccauseremisreferlogs.entity'; 

@EventSubscriber() 
export class HccauseremisreferSubscriber 
	implements EntitySubscriberInterface<Hccauseremisrefer> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(HccauseremisreferLogs) 
    private hccauseremisreferlogsRepository: Repository<HccauseremisreferLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Hccauseremisrefer; 
	} 

	createLog( 
		type: LogHccauseremisreferType, 
		event: 
			| InsertEvent<Hccauseremisrefer> 
			| UpdateEvent<Hccauseremisrefer> 
			| SoftRemoveEvent<Hccauseremisrefer>, 
	) { 
		const hccauseremisreferlog: DeepPartial<HccauseremisreferLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const hccauseremisreferlogs: HccauseremisreferLogs = 
			this.hccauseremisreferlogsRepository.create(hccauseremisreferlog); 
		this.hccauseremisreferlogsRepository.save(hccauseremisreferlogs); 
	} 

	afterInsert(event: InsertEvent<Hccauseremisrefer>) { 
		this.createLog(LogHccauseremisreferType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Hccauseremisrefer>) { 
		this.createLog(LogHccauseremisreferType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Hccauseremisrefer>) { 
		this.createLog(LogHccauseremisreferType.DELETE, event); 
	} 
}