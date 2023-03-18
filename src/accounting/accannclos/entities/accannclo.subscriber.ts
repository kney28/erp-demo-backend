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
import { Accannclo } from './accannclo.entity'; 
import { LogAccanncloType, AccanncloLogs } from './accannclologs.entity'; 

@EventSubscriber() 
export class AccanncloSubscriber 
	implements EntitySubscriberInterface<Accannclo> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(AccanncloLogs) 
    private accannclologsRepository: Repository<AccanncloLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Accannclo; 
	} 

	createLog( 
		type: LogAccanncloType, 
		event: 
			| InsertEvent<Accannclo> 
			| UpdateEvent<Accannclo> 
			| SoftRemoveEvent<Accannclo>, 
	) { 
		const accannclolog: DeepPartial<AccanncloLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const accannclologs: AccanncloLogs = 
			this.accannclologsRepository.create(accannclolog); 
		this.accannclologsRepository.save(accannclologs); 
	} 

	afterInsert(event: InsertEvent<Accannclo>) { 
		this.createLog(LogAccanncloType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Accannclo>) { 
		this.createLog(LogAccanncloType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Accannclo>) { 
		this.createLog(LogAccanncloType.DELETE, event); 
	} 
}