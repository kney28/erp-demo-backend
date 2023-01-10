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
import { MonthlyClosure } from './monthlyclosure.entity';
import {
  LogMonthlyClosureType,
  MonthlyClosureLogs,
} from './monthlyclosurelogs.entity';

@EventSubscriber()
export class MonthlyClosureSubscriber
  implements EntitySubscriberInterface<MonthlyClosure>
{
  constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(MonthlyClosureLogs)
    private monthlyclosurelogsRepository: Repository<MonthlyClosureLogs>,
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return MonthlyClosure;
  }

  createLog(
    type: LogMonthlyClosureType,
    event:
      | InsertEvent<MonthlyClosure>
      | UpdateEvent<MonthlyClosure>
      | SoftRemoveEvent<MonthlyClosure>,
  ) {
    const monthlyclosurelog: DeepPartial<MonthlyClosureLogs> = {
      value: JSON.stringify(event.entity),
      type: type,
      user: this.cls.get('user'),
    };
    const monthlyclosurelogs: MonthlyClosureLogs =
      this.monthlyclosurelogsRepository.create(monthlyclosurelog);
    this.monthlyclosurelogsRepository.save(monthlyclosurelogs);
  }

  afterInsert(event: InsertEvent<MonthlyClosure>) {
    this.createLog(LogMonthlyClosureType.CREATE, event);
  }

  afterUpdate(event: UpdateEvent<MonthlyClosure>) {
    this.createLog(LogMonthlyClosureType.UPDATE, event);
  }

  afterSoftRemove(event: SoftRemoveEvent<MonthlyClosure>) {
    this.createLog(LogMonthlyClosureType.DELETE, event);
  }
}
