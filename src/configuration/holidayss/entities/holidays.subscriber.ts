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
import { Holidays } from './holidays.entity'; 
import { LogHolidaysType, HolidaysLogs } from './holidayslogs.entity'; 

@EventSubscriber() 
export class HolidaysSubscriber 
	implements EntitySubscriberInterface<Holidays> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(HolidaysLogs) 
    private holidayslogsRepository: Repository<HolidaysLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Holidays; 
	} 

	createLog( 
		type: LogHolidaysType, 
		event: 
			| InsertEvent<Holidays> 
			| UpdateEvent<Holidays> 
			| SoftRemoveEvent<Holidays>, 
	) { 
		const holidayslog: DeepPartial<HolidaysLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const holidayslogs: HolidaysLogs = 
			this.holidayslogsRepository.create(holidayslog); 
		this.holidayslogsRepository.save(holidayslogs); 
	} 

	afterInsert(event: InsertEvent<Holidays>) { 
		this.createLog(LogHolidaysType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Holidays>) { 
		this.createLog(LogHolidaysType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Holidays>) { 
		this.createLog(LogHolidaysType.DELETE, event); 
	} 
}