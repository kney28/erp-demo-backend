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
import { Patient } from './patient.entity'; 
import { LogPatientType, PatientLogs } from './patientlogs.entity'; 

@EventSubscriber() 
export class PatientSubscriber 
	implements EntitySubscriberInterface<Patient> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(PatientLogs) 
    private patientlogsRepository: Repository<PatientLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Patient; 
	} 

	createLog( 
		type: LogPatientType, 
		event: 
			| InsertEvent<Patient> 
			| UpdateEvent<Patient> 
			| SoftRemoveEvent<Patient>, 
	) { 
		const patientlog: DeepPartial<PatientLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const patientlogs: PatientLogs = 
			this.patientlogsRepository.create(patientlog); 
		this.patientlogsRepository.save(patientlogs); 
	} 

	afterInsert(event: InsertEvent<Patient>) { 
		this.createLog(LogPatientType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Patient>) { 
		this.createLog(LogPatientType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Patient>) { 
		this.createLog(LogPatientType.DELETE, event); 
	} 
}