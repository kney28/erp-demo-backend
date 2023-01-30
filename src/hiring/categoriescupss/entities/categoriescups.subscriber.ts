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
import { Categoriescups } from './categoriescups.entity'; 
import { LogCategoriescupsType, CategoriescupsLogs } from './categoriescupslogs.entity'; 

@EventSubscriber() 
export class CategoriescupsSubscriber 
	implements EntitySubscriberInterface<Categoriescups> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(CategoriescupsLogs) 
    private categoriescupslogsRepository: Repository<CategoriescupsLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Categoriescups; 
	} 

	createLog( 
		type: LogCategoriescupsType, 
		event: 
			| InsertEvent<Categoriescups> 
			| UpdateEvent<Categoriescups> 
			| SoftRemoveEvent<Categoriescups>, 
	) { 
		const categoriescupslog: DeepPartial<CategoriescupsLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const categoriescupslogs: CategoriescupsLogs = 
			this.categoriescupslogsRepository.create(categoriescupslog); 
		this.categoriescupslogsRepository.save(categoriescupslogs); 
	} 

	afterInsert(event: InsertEvent<Categoriescups>) { 
		this.createLog(LogCategoriescupsType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Categoriescups>) { 
		this.createLog(LogCategoriescupsType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Categoriescups>) { 
		this.createLog(LogCategoriescupsType.DELETE, event); 
	} 
}