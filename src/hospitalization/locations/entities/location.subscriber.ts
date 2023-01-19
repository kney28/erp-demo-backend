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
import { Location } from './location.entity'; 
import { LogLocationType, LocationLogs } from './locationlogs.entity'; 

@EventSubscriber() 
export class LocationSubscriber 
	implements EntitySubscriberInterface<Location> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(LocationLogs) 
    private locationlogsRepository: Repository<LocationLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Location; 
	} 

	createLog( 
		type: LogLocationType, 
		event: 
			| InsertEvent<Location> 
			| UpdateEvent<Location> 
			| SoftRemoveEvent<Location>, 
	) { 
		const locationlog: DeepPartial<LocationLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const locationlogs: LocationLogs = 
			this.locationlogsRepository.create(locationlog); 
		this.locationlogsRepository.save(locationlogs); 
	} 

	afterInsert(event: InsertEvent<Location>) { 
		this.createLog(LogLocationType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Location>) { 
		this.createLog(LogLocationType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Location>) { 
		this.createLog(LogLocationType.DELETE, event); 
	} 
}