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
import { Specialpopulation } from './specialpopulation.entity'; 
import { LogSpecialpopulationType, SpecialpopulationLogs } from './specialpopulationlogs.entity'; 

@EventSubscriber() 
export class SpecialpopulationSubscriber 
	implements EntitySubscriberInterface<Specialpopulation> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(SpecialpopulationLogs) 
    private specialpopulationlogsRepository: Repository<SpecialpopulationLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Specialpopulation; 
	} 

	createLog( 
		type: LogSpecialpopulationType, 
		event: 
			| InsertEvent<Specialpopulation> 
			| UpdateEvent<Specialpopulation> 
			| SoftRemoveEvent<Specialpopulation>, 
	) { 
		const specialpopulationlog: DeepPartial<SpecialpopulationLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const specialpopulationlogs: SpecialpopulationLogs = 
			this.specialpopulationlogsRepository.create(specialpopulationlog); 
		this.specialpopulationlogsRepository.save(specialpopulationlogs); 
	} 

	afterInsert(event: InsertEvent<Specialpopulation>) { 
		this.createLog(LogSpecialpopulationType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Specialpopulation>) { 
		this.createLog(LogSpecialpopulationType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Specialpopulation>) { 
		this.createLog(LogSpecialpopulationType.DELETE, event); 
	} 
}