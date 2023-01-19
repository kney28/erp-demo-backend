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
import { Fee } from './fee.entity'; 
import { LogFeeType, FeeLogs } from './feelogs.entity'; 

@EventSubscriber() 
export class FeeSubscriber 
	implements EntitySubscriberInterface<Fee> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(FeeLogs) 
    private feelogsRepository: Repository<FeeLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Fee; 
	} 

	createLog( 
		type: LogFeeType, 
		event: 
			| InsertEvent<Fee> 
			| UpdateEvent<Fee> 
			| SoftRemoveEvent<Fee>, 
	) { 
		const feelog: DeepPartial<FeeLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const feelogs: FeeLogs = 
			this.feelogsRepository.create(feelog); 
		this.feelogsRepository.save(feelogs); 
	} 

	afterInsert(event: InsertEvent<Fee>) { 
		this.createLog(LogFeeType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Fee>) { 
		this.createLog(LogFeeType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Fee>) { 
		this.createLog(LogFeeType.DELETE, event); 
	} 
}