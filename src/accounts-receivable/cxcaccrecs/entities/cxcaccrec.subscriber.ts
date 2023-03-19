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
import { Cxcaccrec } from './cxcaccrec.entity';
import { LogCxcaccrecType, CxcaccrecLogs } from './cxcaccreclogs.entity';

@EventSubscriber()
export class CxcaccrecSubscriber
  implements EntitySubscriberInterface<Cxcaccrec>
{
  constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(CxcaccrecLogs)
    private cxcaccreclogsRepository: Repository<CxcaccrecLogs>,
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return Cxcaccrec;
  }

  createLog(
    type: LogCxcaccrecType,
    event:
      | InsertEvent<Cxcaccrec>
      | UpdateEvent<Cxcaccrec>
      | SoftRemoveEvent<Cxcaccrec>,
  ) {
    const cxcaccreclog: DeepPartial<CxcaccrecLogs> = {
      value: JSON.stringify(event.entity),
      type: type,
      user: this.cls.get('user'),
    };
    const cxcaccreclogs: CxcaccrecLogs =
      this.cxcaccreclogsRepository.create(cxcaccreclog);
    this.cxcaccreclogsRepository.save(cxcaccreclogs);
  }

  afterInsert(event: InsertEvent<Cxcaccrec>) {
    this.createLog(LogCxcaccrecType.CREATE, event);
  }

  afterUpdate(event: UpdateEvent<Cxcaccrec>) {
    this.createLog(LogCxcaccrecType.UPDATE, event);
  }

  afterSoftRemove(event: SoftRemoveEvent<Cxcaccrec>) {
    this.createLog(LogCxcaccrecType.DELETE, event);
  }
}
