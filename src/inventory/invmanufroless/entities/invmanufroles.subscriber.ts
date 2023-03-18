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
import { Invmanufroles } from './invmanufroles.entity';
import {
  LogInvmanufrolesType,
  InvmanufrolesLogs,
} from './invmanufroleslogs.entity';

@EventSubscriber()
export class InvmanufrolesSubscriber
  implements EntitySubscriberInterface<Invmanufroles>
{
  constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(InvmanufrolesLogs)
    private invmanufroleslogsRepository: Repository<InvmanufrolesLogs>,
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return Invmanufroles;
  }

  createLog(
    type: LogInvmanufrolesType,
    event:
      | InsertEvent<Invmanufroles>
      | UpdateEvent<Invmanufroles>
      | SoftRemoveEvent<Invmanufroles>,
  ) {
    const invmanufroleslog: DeepPartial<InvmanufrolesLogs> = {
      value: JSON.stringify(event.entity),
      type: type,
      user: this.cls.get('user'),
    };
    const invmanufroleslogs: InvmanufrolesLogs =
      this.invmanufroleslogsRepository.create(invmanufroleslog);
    this.invmanufroleslogsRepository.save(invmanufroleslogs);
  }

  afterInsert(event: InsertEvent<Invmanufroles>) {
    this.createLog(LogInvmanufrolesType.CREATE, event);
  }

  afterUpdate(event: UpdateEvent<Invmanufroles>) {
    this.createLog(LogInvmanufrolesType.UPDATE, event);
  }

  afterSoftRemove(event: SoftRemoveEvent<Invmanufroles>) {
    this.createLog(LogInvmanufrolesType.DELETE, event);
  }
}
