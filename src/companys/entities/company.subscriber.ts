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
import { Company } from './company.entity'; 
import { LogCompanyType, CompanyLogs } from './companylogs.entity'; 

@EventSubscriber() 
export class CompanySubscriber 
	implements EntitySubscriberInterface<Company> 
{ 
	constructor(
		dataSource: DataSource, 
		private readonly cls: ClsService, 
		@InjectRepository(CompanyLogs) 
    private companylogsRepository: Repository<CompanyLogs>, 
	) { 
		dataSource.subscribers.push(this); 
	} 

	listenTo() { 
		return Company; 
	} 

	createLog( 
		type: LogCompanyType, 
		event: 
			| InsertEvent<Company> 
			| UpdateEvent<Company> 
			| SoftRemoveEvent<Company>, 
	) { 
		const companylog: DeepPartial<CompanyLogs> = { 
			value: JSON.stringify(event.entity), 
			type: type, 
			user: this.cls.get('user'), 
		}; 
		const companylogs: CompanyLogs = 
			this.companylogsRepository.create(companylog); 
		this.companylogsRepository.save(companylogs); 
	} 

	afterInsert(event: InsertEvent<Company>) { 
		this.createLog(LogCompanyType.CREATE, event); 
	} 

	afterUpdate(event: UpdateEvent<Company>) { 
		this.createLog(LogCompanyType.UPDATE, event); 
	} 

	afterSoftRemove(event: SoftRemoveEvent<Company>) { 
		this.createLog(LogCompanyType.DELETE, event); 
	} 
}