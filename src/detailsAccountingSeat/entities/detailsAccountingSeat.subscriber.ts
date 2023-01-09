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
import { DetailsAccountingSeat } from './detailsAccountingSeat.entity';
import {
  DetailsAccountingSeatLogs,
  LogDetailsAccountingSeatType,
} from './detailsAccountingSeatLogs.entity';

@EventSubscriber()
export class DetailsAccountingSeatSubscriber
  implements EntitySubscriberInterface<DetailsAccountingSeat>
{
  constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(DetailsAccountingSeatLogs)
    private detailsaccountingseatlogsRepository: Repository<DetailsAccountingSeatLogs>,
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return DetailsAccountingSeat;
  }

  createLog(
    type: LogDetailsAccountingSeatType,
    event:
      | InsertEvent<DetailsAccountingSeat>
      | UpdateEvent<DetailsAccountingSeat>
      | SoftRemoveEvent<DetailsAccountingSeat>,
  ) {
    const detailsaccountingseatlog: DeepPartial<DetailsAccountingSeatLogs> = {
      value: JSON.stringify(event.entity),
      type: type,
      user: this.cls.get('user'),
    };
    const detailsaccountingseatlogs: DetailsAccountingSeatLogs =
      this.detailsaccountingseatlogsRepository.create(detailsaccountingseatlog);
    this.detailsaccountingseatlogsRepository.save(detailsaccountingseatlogs);
  }

  afterInsert(event: InsertEvent<DetailsAccountingSeat>) {
    this.createLog(LogDetailsAccountingSeatType.CREATE, event);
  }

  afterUpdate(event: UpdateEvent<DetailsAccountingSeat>) {
    this.createLog(LogDetailsAccountingSeatType.UPDATE, event);
  }

  afterSoftRemove(event: SoftRemoveEvent<DetailsAccountingSeat>) {
    this.createLog(LogDetailsAccountingSeatType.DELETE, event);
  }
}
