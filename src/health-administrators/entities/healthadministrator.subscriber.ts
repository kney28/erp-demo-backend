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
import { HealthAdministrator } from './healthadministrator.entity';
import {
  HealthAdministratorLogs,
  LogHealthAdministratorType,
} from './healthadministratorlogs.entity';

@EventSubscriber()
export class HealthAdministratorSubscriber
  implements EntitySubscriberInterface<HealthAdministrator>
{
  constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(HealthAdministratorLogs)
    private healthadministratorlogsRepository: Repository<HealthAdministratorLogs>,
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return HealthAdministrator;
  }

  createLog(
    type: LogHealthAdministratorType,
    event:
      | InsertEvent<HealthAdministrator>
      | UpdateEvent<HealthAdministrator>
      | SoftRemoveEvent<HealthAdministrator>,
  ) {
    const healthadministratorlog: DeepPartial<HealthAdministratorLogs> = {
      value: JSON.stringify(event.entity),
      type: type,
      user: this.cls.get('user'),
    };
    const healthadministratorlogs: HealthAdministratorLogs =
      this.healthadministratorlogsRepository.create(healthadministratorlog);
    this.healthadministratorlogsRepository.save(healthadministratorlogs);
  }

  afterInsert(event: InsertEvent<HealthAdministrator>) {
    this.createLog(LogHealthAdministratorType.CREATE, event);
  }

  afterUpdate(event: UpdateEvent<HealthAdministrator>) {
    this.createLog(LogHealthAdministratorType.UPDATE, event);
  }

  afterSoftRemove(event: SoftRemoveEvent<HealthAdministrator>) {
    this.createLog(LogHealthAdministratorType.DELETE, event);
  }
}
