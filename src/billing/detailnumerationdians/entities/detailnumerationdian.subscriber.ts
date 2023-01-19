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
import { Detailnumerationdian } from './detailnumerationdian.entity'; 
import { LogDetailnumerationdianType, DetailnumerationdianLogs } from './detailnumerationdianlogs.entity'; 

@EventSubscriber() 
export class DetailnumerationdianSubscriber 
	implements EntitySubscriberInterface<Detailnumerationdian> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(DetailnumerationdianLogs) 
    private detailnumerationdianlogsRepository: Repository<DetailnumerationdianLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Detailnumerationdian; 
	} 

	createLog( 
		type: LogDetailnumerationdianType, 
		event: 
			| InsertEvent<Detailnumerationdian> 
			| UpdateEvent<Detailnumerationdian> 
			| SoftRemoveEvent<Detailnumerationdian>, 
	) { 
		const detailnumerationdianlog: DeepPartial<DetailnumerationdianLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const detailnumerationdianlogs: DetailnumerationdianLogs = 
			this.detailnumerationdianlogsRepository.create(detailnumerationdianlog); 
		this.detailnumerationdianlogsRepository.save(detailnumerationdianlogs); 
	} 

	afterInsert(event: InsertEvent<Detailnumerationdian>) { 
		this.createLog(LogDetailnumerationdianType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Detailnumerationdian>) { 
		this.createLog(LogDetailnumerationdianType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Detailnumerationdian>) { 
		this.createLog(LogDetailnumerationdianType.DELETE, event); 
	} 
}