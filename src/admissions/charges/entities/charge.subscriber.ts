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
import { Charge } from './charge.entity'; 
import { LogChargeType, ChargeLogs } from './chargelogs.entity'; 

@EventSubscriber() 
export class ChargeSubscriber 
	implements EntitySubscriberInterface<Charge> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(ChargeLogs) 
    private chargelogsRepository: Repository<ChargeLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Charge; 
	} 

	createLog( 
		type: LogChargeType, 
		event: 
			| InsertEvent<Charge> 
			| UpdateEvent<Charge> 
			| SoftRemoveEvent<Charge>, 
	) { 
		const chargelog: DeepPartial<ChargeLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const chargelogs: ChargeLogs = 
			this.chargelogsRepository.create(chargelog); 
		this.chargelogsRepository.save(chargelogs); 
	} 

	afterInsert(event: InsertEvent<Charge>) { 
		this.createLog(LogChargeType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Charge>) { 
		this.createLog(LogChargeType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Charge>) { 
		this.createLog(LogChargeType.DELETE, event); 
	} 
}