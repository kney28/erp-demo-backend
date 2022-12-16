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
import { AccountingSeat } from './accountingSeat.entity';
import {
  AccountingSeatsLogs,
  LogAccountingSeatsType,
} from './accountingseatslogs.entity';

@EventSubscriber()
export class AccountingSeatSubscriber
  implements EntitySubscriberInterface<AccountingSeat>
{
  constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(AccountingSeatsLogs)
    private accountingseatllogsRepository: Repository<AccountingSeatsLogs>,
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return AccountingSeat;
  }

  createLog(
    type: LogAccountingSeatsType,
    event:
      | InsertEvent<AccountingSeat>
      | UpdateEvent<AccountingSeat>
      | SoftRemoveEvent<AccountingSeat>,
  ) {
    const accountingseatslog: DeepPartial<AccountingSeatsLogs> = {
      value: JSON.stringify(event.entity),
      type: type,
      user: this.cls.get('user'),
    };
    const accountingseatslogs: AccountingSeatsLogs =
      this.accountingseatllogsRepository.create(accountingseatslog);
    this.accountingseatllogsRepository.save(accountingseatslogs);
  }

  afterInsert(event: InsertEvent<AccountingSeat>) {
    this.createLog(LogAccountingSeatsType.CREATE, event);
  }

  afterUpdate(event: UpdateEvent<AccountingSeat>) {
    this.createLog(LogAccountingSeatsType.UPDATE, event);
  }

  afterSoftRemove(event: SoftRemoveEvent<AccountingSeat>) {
    this.createLog(LogAccountingSeatsType.DELETE, event);
  }
}
