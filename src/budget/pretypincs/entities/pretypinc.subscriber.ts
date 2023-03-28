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
import { Pretypinc } from './pretypinc.entity';
import { LogPretypincType, PretypincLogs } from './pretypinclogs.entity';

@EventSubscriber()
export class PretypincSubscriber
  implements EntitySubscriberInterface<Pretypinc>
{
  constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(PretypincLogs)
    private pretypinclogsRepository: Repository<PretypincLogs>,
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return Pretypinc;
  }

  createLog(
    type: LogPretypincType,
    event:
      | InsertEvent<Pretypinc>
      | UpdateEvent<Pretypinc>
      | SoftRemoveEvent<Pretypinc>,
  ) {
    const pretypinclog: DeepPartial<PretypincLogs> = {
      value: JSON.stringify(event.entity),
      type: type,
      user: this.cls.get('user'),
    };
    const pretypinclogs: PretypincLogs =
      this.pretypinclogsRepository.create(pretypinclog);
    this.pretypinclogsRepository.save(pretypinclogs);
  }

  afterInsert(event: InsertEvent<Pretypinc>) {
    this.createLog(LogPretypincType.CREATE, event);
  }

  afterUpdate(event: UpdateEvent<Pretypinc>) {
    this.createLog(LogPretypincType.UPDATE, event);
  }

  afterSoftRemove(event: SoftRemoveEvent<Pretypinc>) {
    this.createLog(LogPretypincType.DELETE, event);
  }
}
