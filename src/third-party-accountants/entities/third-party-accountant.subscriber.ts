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
import { ThirdPartyAccountant } from './third-party-accountant.entity';
import { ThirdPartyAccountantLogs } from './third-party-accountantlogs.entity';

@EventSubscriber()
export class ThirdPartyAccountantSubscriber
  implements EntitySubscriberInterface<ThirdPartyAccountant>
{
  constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(ThirdPartyAccountantLogs)
    private thirdPartyAccountantLogsRepository: Repository<ThirdPartyAccountantLogs>,
    @InjectRepository(ThirdPartyAccountant)
    private thirdPartyAccountant: Repository<ThirdPartyAccountant>,
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return ThirdPartyAccountant;
  }

  createLog(
    type: number,
    event:
      | InsertEvent<ThirdPartyAccountant>
      | UpdateEvent<ThirdPartyAccountant>
      | SoftRemoveEvent<ThirdPartyAccountant>,
  ) {
    const thirdPartyAccountant: DeepPartial<ThirdPartyAccountantLogs> = {
      value: JSON.stringify(event.entity),
      type: type,
      user: this.cls.get('user'),
    };
    const thirdPartyAccountantLogs: ThirdPartyAccountantLogs =
      this.thirdPartyAccountantLogsRepository.create(thirdPartyAccountant);
    this.thirdPartyAccountantLogsRepository.save(thirdPartyAccountantLogs);
  }

  afterInsert(event: InsertEvent<ThirdPartyAccountant>) {
    this.createLog(1, event);
  }

  afterUpdate(event: UpdateEvent<ThirdPartyAccountant>) {
    this.createLog(2, event);
  }

  afterSoftRemove(event: SoftRemoveEvent<ThirdPartyAccountant>) {
    this.createLog(3, event);
  }
}
