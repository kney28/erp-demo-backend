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
import { DetailCopaysAndFee } from './detailCopaysAndFee.entity';
import {
  DetailCopaysAndFeesLogs,
  LogDetaiCopaysAndFeesType,
} from './detailCopaysAndFeesLogs.entity';

@EventSubscriber()
export class DetailCopaysAndFeesSubscriber
  implements EntitySubscriberInterface<DetailCopaysAndFee>
{
  constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(DetailCopaysAndFeesLogs)
    private detailcopaysandfeeslogsRepository: Repository<DetailCopaysAndFeesLogs>,
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return DetailCopaysAndFee;
  }

  createLog(
    type: LogDetaiCopaysAndFeesType,
    event:
      | InsertEvent<DetailCopaysAndFee>
      | UpdateEvent<DetailCopaysAndFee>
      | SoftRemoveEvent<DetailCopaysAndFee>,
  ) {
    const detailcopaysandfeeslog: DeepPartial<DetailCopaysAndFeesLogs> = {
      value: JSON.stringify(event.entity),
      type: type,
      user: this.cls.get('user'),
    };
    const detailcopaysandfeeslogs: DetailCopaysAndFeesLogs =
      this.detailcopaysandfeeslogsRepository.create(detailcopaysandfeeslog);
    this.detailcopaysandfeeslogsRepository.save(detailcopaysandfeeslogs);
  }

  afterInsert(event: InsertEvent<DetailCopaysAndFee>) {
    this.createLog(LogDetaiCopaysAndFeesType.CREATE, event);
  }

  afterUpdate(event: UpdateEvent<DetailCopaysAndFee>) {
    this.createLog(LogDetaiCopaysAndFeesType.UPDATE, event);
  }

  afterSoftRemove(event: SoftRemoveEvent<DetailCopaysAndFee>) {
    this.createLog(LogDetaiCopaysAndFeesType.DELETE, event);
  }
}
