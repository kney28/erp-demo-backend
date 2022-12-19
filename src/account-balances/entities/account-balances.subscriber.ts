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
import { AccountBalance } from './account-balance.entity';
import { AccountBalanceLogs } from './account-balanceslogs.entity';

@EventSubscriber()
export class AccountBalanceSubscriber
  implements EntitySubscriberInterface<AccountBalance>
{
  constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(AccountBalanceLogs)
    private accountBalanceLogsRepository: Repository<AccountBalanceLogs>,
    @InjectRepository(AccountBalance)
    private accountBalance: Repository<AccountBalance>,
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return AccountBalance;
  }

  createLog(
    type: number,
    event:
      | InsertEvent<AccountBalance>
      | UpdateEvent<AccountBalance>
      | SoftRemoveEvent<AccountBalance>,
  ) {
    const accountBalance: DeepPartial<AccountBalanceLogs> = {
      value: JSON.stringify(event.entity),
      type: type,
      user: this.cls.get('user'),
    };
    const accountBalanceLogs: AccountBalanceLogs =
      this.accountBalanceLogsRepository.create(accountBalance);
    this.accountBalanceLogsRepository.save(accountBalanceLogs);
  }

  afterInsert(event: InsertEvent<AccountBalance>) {
    this.createLog(1, event);
  }

  afterUpdate(event: UpdateEvent<AccountBalance>) {
    this.createLog(2, event);
  }

  afterSoftRemove(event: SoftRemoveEvent<AccountBalance>) {
    this.createLog(3, event);
  }
}
