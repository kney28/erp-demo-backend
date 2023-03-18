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
import { Accmontope } from './accmontope.entity'; 
import { LogAccmontopeType, AccmontopeLogs } from './accmontopelogs.entity'; 

@EventSubscriber() 
export class AccmontopeSubscriber 
	implements EntitySubscriberInterface<Accmontope> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(AccmontopeLogs) 
    private accmontopelogsRepository: Repository<AccmontopeLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Accmontope; 
	} 

	createLog( 
		type: LogAccmontopeType, 
		event: 
			| InsertEvent<Accmontope> 
			| UpdateEvent<Accmontope> 
			| SoftRemoveEvent<Accmontope>, 
	) { 
		const accmontopelog: DeepPartial<AccmontopeLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const accmontopelogs: AccmontopeLogs = 
			this.accmontopelogsRepository.create(accmontopelog); 
		this.accmontopelogsRepository.save(accmontopelogs); 
	} 

	afterInsert(event: InsertEvent<Accmontope>) { 
		this.createLog(LogAccmontopeType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Accmontope>) { 
		this.createLog(LogAccmontopeType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Accmontope>) { 
		this.createLog(LogAccmontopeType.DELETE, event); 
	} 
}