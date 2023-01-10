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
import { MonthlyOpening } from './monthlyopening.entity';
import {
  LogMonthlyOpeningType,
  MonthlyOpeningLogs,
} from './monthlyopeninglogs.entity';

@EventSubscriber()
export class MonthlyOpeningSubscriber
  implements EntitySubscriberInterface<MonthlyOpening>
{
  constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(MonthlyOpeningLogs)
    private monthlyopeninglogsRepository: Repository<MonthlyOpeningLogs>,
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return MonthlyOpening;
  }

  createLog(
    type: LogMonthlyOpeningType,
    event:
      | InsertEvent<MonthlyOpening>
      | UpdateEvent<MonthlyOpening>
      | SoftRemoveEvent<MonthlyOpening>,
  ) {
    const monthlyopeninglog: DeepPartial<MonthlyOpeningLogs> = {
      value: JSON.stringify(event.entity),
      type: type,
      user: this.cls.get('user'),
    };
    const monthlyopeninglogs: MonthlyOpeningLogs =
      this.monthlyopeninglogsRepository.create(monthlyopeninglog);
    this.monthlyopeninglogsRepository.save(monthlyopeninglogs);
  }

  afterInsert(event: InsertEvent<MonthlyOpening>) {
    this.createLog(LogMonthlyOpeningType.CREATE, event);
  }

  afterUpdate(event: UpdateEvent<MonthlyOpening>) {
    this.createLog(LogMonthlyOpeningType.UPDATE, event);
  }

  afterSoftRemove(event: SoftRemoveEvent<MonthlyOpening>) {
    this.createLog(LogMonthlyOpeningType.DELETE, event);
  }
}
