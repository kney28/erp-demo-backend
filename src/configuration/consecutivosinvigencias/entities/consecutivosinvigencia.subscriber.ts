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
import { Consecutivosinvigencia } from './consecutivosinvigencia.entity'; 
import { LogConsecutivosinvigenciaType, ConsecutivosinvigenciaLogs } from './consecutivosinvigencialogs.entity'; 

@EventSubscriber() 
export class ConsecutivosinvigenciaSubscriber 
	implements EntitySubscriberInterface<Consecutivosinvigencia> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(ConsecutivosinvigenciaLogs) 
    private consecutivosinvigencialogsRepository: Repository<ConsecutivosinvigenciaLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Consecutivosinvigencia; 
	} 

	createLog( 
		type: LogConsecutivosinvigenciaType, 
		event: 
			| InsertEvent<Consecutivosinvigencia> 
			| UpdateEvent<Consecutivosinvigencia> 
			| SoftRemoveEvent<Consecutivosinvigencia>, 
	) { 
		const consecutivosinvigencialog: DeepPartial<ConsecutivosinvigenciaLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const consecutivosinvigencialogs: ConsecutivosinvigenciaLogs = 
			this.consecutivosinvigencialogsRepository.create(consecutivosinvigencialog); 
		this.consecutivosinvigencialogsRepository.save(consecutivosinvigencialogs); 
	} 

	afterInsert(event: InsertEvent<Consecutivosinvigencia>) { 
		this.createLog(LogConsecutivosinvigenciaType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Consecutivosinvigencia>) { 
		this.createLog(LogConsecutivosinvigenciaType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Consecutivosinvigencia>) { 
		this.createLog(LogConsecutivosinvigenciaType.DELETE, event); 
	} 
}