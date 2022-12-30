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
import { CopaysAndFee } from './copaysAndFee.entity';
import {
  CopaysAndFeesLogs,
  LogCopaysAndFeesType,
} from './copaysAndFeeslogs.entity';

@EventSubscriber()
export class CopaysAndFeesSubscriber
  implements EntitySubscriberInterface<CopaysAndFee>
{
  constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(CopaysAndFeesLogs)
    private copaysandfeeslogsRepository: Repository<CopaysAndFeesLogs>,
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return CopaysAndFee;
  }

  createLog(
    type: LogCopaysAndFeesType,
    event:
      | InsertEvent<CopaysAndFee>
      | UpdateEvent<CopaysAndFee>
      | SoftRemoveEvent<CopaysAndFee>,
  ) {
    const copaysandfeeslog: DeepPartial<CopaysAndFeesLogs> = {
      value: JSON.stringify(event.entity),
      type: type,
      user: this.cls.get('user'),
    };
    const copaysandfeeslogs: CopaysAndFeesLogs =
      this.copaysandfeeslogsRepository.create(copaysandfeeslog);
    this.copaysandfeeslogsRepository.save(copaysandfeeslogs);
  }

  afterInsert(event: InsertEvent<CopaysAndFee>) {
    this.createLog(LogCopaysAndFeesType.CREATE, event);
  }

  afterUpdate(event: UpdateEvent<CopaysAndFee>) {
    this.createLog(LogCopaysAndFeesType.UPDATE, event);
  }

  afterSoftRemove(event: SoftRemoveEvent<CopaysAndFee>) {
    this.createLog(LogCopaysAndFeesType.DELETE, event);
  }
}
