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
import { SisbenLevel } from './sisbenlevel.entity';
import { LogSisbenLevelType, SisbenLevelLogs } from './sisbenlevellogs.entity';

@EventSubscriber()
export class SisbenLevelSubscriber
  implements EntitySubscriberInterface<SisbenLevel>
{
  constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(SisbenLevelLogs)
    private sisbenlevellogsRepository: Repository<SisbenLevelLogs>,
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return SisbenLevel;
  }

  createLog(
    type: LogSisbenLevelType,
    event:
      | InsertEvent<SisbenLevel>
      | UpdateEvent<SisbenLevel>
      | SoftRemoveEvent<SisbenLevel>,
  ) {
    const sisbenlevellog: DeepPartial<SisbenLevelLogs> = {
      value: JSON.stringify(event.entity),
      type: type,
      user: this.cls.get('user'),
    };
    const sisbenlevellogs: SisbenLevelLogs =
      this.sisbenlevellogsRepository.create(sisbenlevellog);
    this.sisbenlevellogsRepository.save(sisbenlevellogs);
  }

  afterInsert(event: InsertEvent<SisbenLevel>) {
    this.createLog(LogSisbenLevelType.CREATE, event);
  }

  afterUpdate(event: UpdateEvent<SisbenLevel>) {
    this.createLog(LogSisbenLevelType.UPDATE, event);
  }

  afterSoftRemove(event: SoftRemoveEvent<SisbenLevel>) {
    this.createLog(LogSisbenLevelType.DELETE, event);
  }
}
