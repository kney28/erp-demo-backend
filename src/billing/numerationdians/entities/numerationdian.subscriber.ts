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
import { Numerationdian } from './numerationdian.entity'; 
import { LogNumerationdianType, NumerationdianLogs } from './numerationdianlogs.entity'; 

@EventSubscriber() 
export class NumerationdianSubscriber 
	implements EntitySubscriberInterface<Numerationdian> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(NumerationdianLogs) 
    private numerationdianlogsRepository: Repository<NumerationdianLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Numerationdian; 
	} 

	createLog( 
		type: LogNumerationdianType, 
		event: 
			| InsertEvent<Numerationdian> 
			| UpdateEvent<Numerationdian> 
			| SoftRemoveEvent<Numerationdian>, 
	) { 
		const numerationdianlog: DeepPartial<NumerationdianLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const numerationdianlogs: NumerationdianLogs = 
			this.numerationdianlogsRepository.create(numerationdianlog); 
		this.numerationdianlogsRepository.save(numerationdianlogs); 
	} 

	afterInsert(event: InsertEvent<Numerationdian>) { 
		this.createLog(LogNumerationdianType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Numerationdian>) { 
		this.createLog(LogNumerationdianType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Numerationdian>) { 
		this.createLog(LogNumerationdianType.DELETE, event); 
	} 
}