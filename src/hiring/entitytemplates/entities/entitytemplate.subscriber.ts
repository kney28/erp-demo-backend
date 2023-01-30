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
import { Entitytemplate } from './entitytemplate.entity'; 
import { LogEntitytemplateType, EntitytemplateLogs } from './entitytemplatelogs.entity'; 

@EventSubscriber() 
export class EntitytemplateSubscriber 
	implements EntitySubscriberInterface<Entitytemplate> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(EntitytemplateLogs) 
    private entitytemplatelogsRepository: Repository<EntitytemplateLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Entitytemplate; 
	} 

	createLog( 
		type: LogEntitytemplateType, 
		event: 
			| InsertEvent<Entitytemplate> 
			| UpdateEvent<Entitytemplate> 
			| SoftRemoveEvent<Entitytemplate>, 
	) { 
		const entitytemplatelog: DeepPartial<EntitytemplateLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const entitytemplatelogs: EntitytemplateLogs = 
			this.entitytemplatelogsRepository.create(entitytemplatelog); 
		this.entitytemplatelogsRepository.save(entitytemplatelogs); 
	} 

	afterInsert(event: InsertEvent<Entitytemplate>) { 
		this.createLog(LogEntitytemplateType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Entitytemplate>) { 
		this.createLog(LogEntitytemplateType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Entitytemplate>) { 
		this.createLog(LogEntitytemplateType.DELETE, event); 
	} 
}