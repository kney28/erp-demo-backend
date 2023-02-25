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
import { Goopar } from './goopar.entity';
import { LogGooparType, GooparLogs } from './gooparlogs.entity';

@EventSubscriber()
export class GooparSubscriber implements EntitySubscriberInterface<Goopar> {
  constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(GooparLogs)
    private gooparlogsRepository: Repository<GooparLogs>,
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return Goopar;
  }

  createLog(
    type: LogGooparType,
    event: InsertEvent<Goopar> | UpdateEvent<Goopar> | SoftRemoveEvent<Goopar>,
  ) {
    const gooparlog: DeepPartial<GooparLogs> = {
      value: JSON.stringify(event.entity),
      type: type,
      user: this.cls.get('user'),
    };
    const gooparlogs: GooparLogs = this.gooparlogsRepository.create(gooparlog);
    this.gooparlogsRepository.save(gooparlogs);
  }

  afterInsert(event: InsertEvent<Goopar>) {
    this.createLog(LogGooparType.CREATE, event);
  }

  afterUpdate(event: UpdateEvent<Goopar>) {
    this.createLog(LogGooparType.UPDATE, event);
  }

  afterSoftRemove(event: SoftRemoveEvent<Goopar>) {
    this.createLog(LogGooparType.DELETE, event);
  }
}
