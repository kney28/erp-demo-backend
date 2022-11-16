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
import { RegisterStatus } from './registerStatus.entity';
import {
  LogRegisterStatusDate,
  Registerstatuslogs,
} from './registerstatuslogs.entity';

@EventSubscriber()
export class RegisterStatusSubscriber
  implements EntitySubscriberInterface<RegisterStatus>
{
  constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(Registerstatuslogs)
    private registerstatuslogsRepository: Repository<Registerstatuslogs>,
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return RegisterStatus;
  }

  createLog(
    type: LogRegisterStatusDate,
    event:
      | InsertEvent<RegisterStatus>
      | UpdateEvent<RegisterStatus>
      | SoftRemoveEvent<RegisterStatus>,
  ) {
    const registerstatuslog: DeepPartial<Registerstatuslogs> = {
      value: JSON.stringify(event.entity),
      type: type,
      user: this.cls.get('user'),
    };
    const registerstatuslogs: Registerstatuslogs =
      this.registerstatuslogsRepository.create(registerstatuslog);
    this.registerstatuslogsRepository.save(registerstatuslogs);
  }

  afterInsert(event: InsertEvent<RegisterStatus>) {
    this.createLog(LogRegisterStatusDate.CREATE, event);
  }

  afterUpdate(event: UpdateEvent<RegisterStatus>) {
    this.createLog(LogRegisterStatusDate.UPDATE, event);
  }

  afterSoftRemove(event: SoftRemoveEvent<RegisterStatus>) {
    this.createLog(LogRegisterStatusDate.DELETE, event);
  }
}
