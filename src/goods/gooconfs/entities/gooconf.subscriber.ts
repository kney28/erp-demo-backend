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
import { Gooconf } from './gooconf.entity';
import { LogGooconfType, GooconfLogs } from './gooconflogs.entity';

@EventSubscriber()
export class GooconfSubscriber implements EntitySubscriberInterface<Gooconf> {
  constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(GooconfLogs)
    private gooconflogsRepository: Repository<GooconfLogs>,
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return Gooconf;
  }

  createLog(
    type: LogGooconfType,
    event:
      | InsertEvent<Gooconf>
      | UpdateEvent<Gooconf>
      | SoftRemoveEvent<Gooconf>,
  ) {
    const gooconflog: DeepPartial<GooconfLogs> = {
      value: JSON.stringify(event.entity),
      type: type,
      user: this.cls.get('user'),
    };
    const gooconflogs: GooconfLogs =
      this.gooconflogsRepository.create(gooconflog);
    this.gooconflogsRepository.save(gooconflogs);
  }

  afterInsert(event: InsertEvent<Gooconf>) {
    this.createLog(LogGooconfType.CREATE, event);
  }

  afterUpdate(event: UpdateEvent<Gooconf>) {
    this.createLog(LogGooconfType.UPDATE, event);
  }

  afterSoftRemove(event: SoftRemoveEvent<Gooconf>) {
    this.createLog(LogGooconfType.DELETE, event);
  }
}
