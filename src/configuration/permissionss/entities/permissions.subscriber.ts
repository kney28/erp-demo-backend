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
import { Permissions } from './permissions.entity'; 
import { LogPermissionsType, PermissionsLogs } from './permissionslogs.entity'; 

@EventSubscriber() 
export class PermissionsSubscriber 
	implements EntitySubscriberInterface<Permissions> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(PermissionsLogs) 
    private permissionslogsRepository: Repository<PermissionsLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Permissions; 
	} 

	createLog( 
		type: LogPermissionsType, 
		event: 
			| InsertEvent<Permissions> 
			| UpdateEvent<Permissions> 
			| SoftRemoveEvent<Permissions>, 
	) { 
		const permissionslog: DeepPartial<PermissionsLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const permissionslogs: PermissionsLogs = 
			this.permissionslogsRepository.create(permissionslog); 
		this.permissionslogsRepository.save(permissionslogs); 
	} 

	afterInsert(event: InsertEvent<Permissions>) { 
		this.createLog(LogPermissionsType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Permissions>) { 
		this.createLog(LogPermissionsType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Permissions>) { 
		this.createLog(LogPermissionsType.DELETE, event); 
	} 
}