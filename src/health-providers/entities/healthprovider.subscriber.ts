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
import { HealthProvider } from './healthprovider.entity';
import {
  HealthProviderLogs,
  LogHealthProviderType,
} from './healthproviderlogs.entity';

@EventSubscriber()
export class HealthProviderSubscriber
  implements EntitySubscriberInterface<HealthProvider>
{
  constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(HealthProviderLogs)
    private healthproviderlogsRepository: Repository<HealthProviderLogs>,
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return HealthProvider;
  }

  createLog(
    type: LogHealthProviderType,
    event:
      | InsertEvent<HealthProvider>
      | UpdateEvent<HealthProvider>
      | SoftRemoveEvent<HealthProvider>,
  ) {
    const healthprovidersonlog: DeepPartial<HealthProviderLogs> = {
      value: JSON.stringify(event.entity),
      type: type,
      user: this.cls.get('user'),
    };
    const healthproviderlogs: HealthProviderLogs =
      this.healthproviderlogsRepository.create(healthprovidersonlog);
    this.healthproviderlogsRepository.save(healthproviderlogs);
  }

  afterInsert(event: InsertEvent<HealthProvider>) {
    this.createLog(LogHealthProviderType.CREATE, event);
  }

  afterUpdate(event: UpdateEvent<HealthProvider>) {
    this.createLog(LogHealthProviderType.UPDATE, event);
  }

  afterSoftRemove(event: SoftRemoveEvent<HealthProvider>) {
    this.createLog(LogHealthProviderType.DELETE, event);
  }
}
