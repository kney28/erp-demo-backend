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
import { Invpharfor } from './invpharfor.entity';
import { LogInvpharforType, InvpharforLogs } from './invpharforlogs.entity';

@EventSubscriber()
export class InvpharforSubscriber
  implements EntitySubscriberInterface<Invpharfor>
{
  constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(InvpharforLogs)
    private invpharforlogsRepository: Repository<InvpharforLogs>,
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return Invpharfor;
  }

  createLog(
    type: LogInvpharforType,
    event:
      | InsertEvent<Invpharfor>
      | UpdateEvent<Invpharfor>
      | SoftRemoveEvent<Invpharfor>,
  ) {
    const invpharforlog: DeepPartial<InvpharforLogs> = {
      value: JSON.stringify(event.entity),
      type: type,
      user: this.cls.get('user'),
    };
    const invpharforlogs: InvpharforLogs =
      this.invpharforlogsRepository.create(invpharforlog);
    this.invpharforlogsRepository.save(invpharforlogs);
  }

  afterInsert(event: InsertEvent<Invpharfor>) {
    this.createLog(LogInvpharforType.CREATE, event);
  }

  afterUpdate(event: UpdateEvent<Invpharfor>) {
    this.createLog(LogInvpharforType.UPDATE, event);
  }

  afterSoftRemove(event: SoftRemoveEvent<Invpharfor>) {
    this.createLog(LogInvpharforType.DELETE, event);
  }
}
