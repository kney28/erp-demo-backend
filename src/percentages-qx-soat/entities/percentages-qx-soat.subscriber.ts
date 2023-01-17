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

import { ClsService } from 'nestjs-cls';

import { InjectRepository } from '@nestjs/typeorm';
import { PercentagesQxSoat } from './percentages-qx-soat.entity';
import {
  LogPercentageQXType,
  PercentagesQxSoatLogs,
} from './percentages-qx-soat-logs.entity';

@EventSubscriber()
export class PercentagesQxSoatSubscriber
  implements EntitySubscriberInterface<PercentagesQxSoat>
{
  constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(PercentagesQxSoatLogs)
    private percentagesQxSoatLogsRepository: Repository<PercentagesQxSoatLogs>,
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return PercentagesQxSoat;
  }

  createLog(
    type: LogPercentageQXType,
    event:
      | InsertEvent<PercentagesQxSoat>
      | UpdateEvent<PercentagesQxSoat>
      | SoftRemoveEvent<PercentagesQxSoat>,
  ) {
    const percentagesQxSoatLog: DeepPartial<PercentagesQxSoatLogs> = {
      value: JSON.stringify(event.entity),
      type: type,
      user: this.cls.get('user'),
    };
    const percentagesQxSoatLogs: PercentagesQxSoatLogs =
      this.percentagesQxSoatLogsRepository.create(percentagesQxSoatLog);
    this.percentagesQxSoatLogsRepository.save(percentagesQxSoatLogs);
  }

  afterInsert(event: InsertEvent<PercentagesQxSoat>) {
    this.createLog(LogPercentageQXType.CREATE, event);
  }

  afterUpdate(event: UpdateEvent<PercentagesQxSoat>) {
    this.createLog(LogPercentageQXType.UPDATE, event);
  }

  afterSoftRemove(event: SoftRemoveEvent<PercentagesQxSoat>) {
    this.createLog(LogPercentageQXType.DELETE, event);
  }
}
