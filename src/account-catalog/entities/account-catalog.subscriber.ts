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

import { ClsService } from 'nestjs-cls';

import { InjectRepository } from '@nestjs/typeorm';
import { AccountCatalog, classCatalog } from './account-catalog.entity';
import { AccountCatalogLogs } from './account-cataloglogs.entity';

@EventSubscriber()
export class AccountCatalogSubscriber
  implements EntitySubscriberInterface<AccountCatalog>
{
  constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(AccountCatalogLogs)
    private accountCatalogLogsRepository: Repository<AccountCatalogLogs>,
    @InjectRepository(AccountCatalog)
    private accountCatalog: Repository<AccountCatalog>,
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return AccountCatalog;
  }

  createLog(
    type: number,
    event:
      | InsertEvent<AccountCatalog>
      | UpdateEvent<AccountCatalog>
      | SoftRemoveEvent<AccountCatalog>,
  ) {
    const accountCatalog: DeepPartial<AccountCatalogLogs> = {
      value: JSON.stringify(event.entity),
      type: type,
      user: this.cls.get('user'),
    };
    const accountCatalogLogs: AccountCatalogLogs =
      this.accountCatalogLogsRepository.create(accountCatalog);
    this.accountCatalogLogsRepository.save(accountCatalogLogs);
  }

  afterInsert(event: InsertEvent<AccountCatalog>) {
    this.createLog(1, event);
  }

  afterUpdate(event: UpdateEvent<AccountCatalog>) {
    this.createLog(2, event);
  }

  afterSoftRemove(event: SoftRemoveEvent<AccountCatalog>) {
    this.createLog(3, event);
  }
}
