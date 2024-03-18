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
import { Floor } from './floor.entity'; 
import { LogFloorType, FloorLogs } from './floorlogs.entity'; 

@EventSubscriber() 
export class FloorSubscriber 
	implements EntitySubscriberInterface<Floor> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(FloorLogs) 
    private floorlogsRepository: Repository<FloorLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Floor; 
	} 

	createLog( 
		type: LogFloorType, 
		event: 
			| InsertEvent<Floor> 
			| UpdateEvent<Floor> 
			| SoftRemoveEvent<Floor>, 
	) { 
		const floorlog: DeepPartial<FloorLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const floorlogs: FloorLogs = 
			this.floorlogsRepository.create(floorlog); 
		this.floorlogsRepository.save(floorlogs); 
	} 

	afterInsert(event: InsertEvent<Floor>) { 
		this.createLog(LogFloorType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Floor>) { 
		this.createLog(LogFloorType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Floor>) { 
		this.createLog(LogFloorType.DELETE, event); 
	} 
}