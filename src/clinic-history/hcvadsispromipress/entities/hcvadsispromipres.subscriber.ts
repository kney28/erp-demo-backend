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
import { Hcvadsispromipres } from './hcvadsispromipres.entity'; 
import { LogHcvadsispromipresType, HcvadsispromipresLogs } from './hcvadsispromipreslogs.entity'; 

@EventSubscriber() 
export class HcvadsispromipresSubscriber 
	implements EntitySubscriberInterface<Hcvadsispromipres> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(HcvadsispromipresLogs) 
    private hcvadsispromipreslogsRepository: Repository<HcvadsispromipresLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Hcvadsispromipres; 
	} 

	createLog( 
		type: LogHcvadsispromipresType, 
		event: 
			| InsertEvent<Hcvadsispromipres> 
			| UpdateEvent<Hcvadsispromipres> 
			| SoftRemoveEvent<Hcvadsispromipres>, 
	) { 
		const hcvadsispromipreslog: DeepPartial<HcvadsispromipresLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const hcvadsispromipreslogs: HcvadsispromipresLogs = 
			this.hcvadsispromipreslogsRepository.create(hcvadsispromipreslog); 
		this.hcvadsispromipreslogsRepository.save(hcvadsispromipreslogs); 
	} 

	afterInsert(event: InsertEvent<Hcvadsispromipres>) { 
		this.createLog(LogHcvadsispromipresType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Hcvadsispromipres>) { 
		this.createLog(LogHcvadsispromipresType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Hcvadsispromipres>) { 
		this.createLog(LogHcvadsispromipresType.DELETE, event); 
	} 
}