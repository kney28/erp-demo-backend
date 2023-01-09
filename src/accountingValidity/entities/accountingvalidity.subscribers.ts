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
import { AccountingValidity } from './accountingvalidity.entity';
import {
  AccountingValidityLogs,
  LogAccountingValidityType,
} from './accountingvaliditylogs.entity';

@EventSubscriber()
export class AccountingValiditySubscriber
  implements EntitySubscriberInterface<AccountingValidity>
{
  constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(AccountingValidityLogs)
    private accountingvaliditylogsRepository: Repository<AccountingValidityLogs>,
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return AccountingValidity;
  }

  createLog(
    type: LogAccountingValidityType,
    event:
      | InsertEvent<AccountingValidity>
      | UpdateEvent<AccountingValidity>
      | SoftRemoveEvent<AccountingValidity>,
  ) {
    const accountingvaliditylog: DeepPartial<AccountingValidityLogs> = {
      value: JSON.stringify(event.entity),
      type: type,
      user: this.cls.get('user'),
    };
    const accountingvaliditylogs: AccountingValidityLogs =
      this.accountingvaliditylogsRepository.create(accountingvaliditylog);
    this.accountingvaliditylogsRepository.save(accountingvaliditylogs);
  }

  afterInsert(event: InsertEvent<AccountingValidity>) {
    this.createLog(LogAccountingValidityType.CREATE, event);
  }

  afterUpdate(event: UpdateEvent<AccountingValidity>) {
    this.createLog(LogAccountingValidityType.UPDATE, event);
  }

  afterSoftRemove(event: SoftRemoveEvent<AccountingValidity>) {
    this.createLog(LogAccountingValidityType.DELETE, event);
  }
}
