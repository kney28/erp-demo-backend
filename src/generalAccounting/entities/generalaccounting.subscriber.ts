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
import { GeneralAccounting } from './generalaccounting.entity';
import {
  GeneralAccountingLogs,
  LogGeneralAccountingType,
} from './generalaccountinglogs.entity';

@EventSubscriber()
export class GeneralAccountingSubscriber
  implements EntitySubscriberInterface<GeneralAccounting>
{
  constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(GeneralAccountingLogs)
    private generalaccountinglogs: Repository<GeneralAccountingLogs>,
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return GeneralAccounting;
  }

  createLog(
    type: LogGeneralAccountingType,
    event:
      | InsertEvent<GeneralAccounting>
      | UpdateEvent<GeneralAccounting>
      | SoftRemoveEvent<GeneralAccounting>,
  ) {
    const generalaccountinglog: DeepPartial<GeneralAccountingLogs> = {
      value: JSON.stringify(event.entity),
      type: type,
      user: this.cls.get('user'),
    };
    const generalaccountinglogs: GeneralAccountingLogs =
      this.generalaccountinglogs.create(generalaccountinglog);
    this.generalaccountinglogs.save(generalaccountinglogs);
  }

  afterInsert(event: InsertEvent<GeneralAccounting>) {
    this.createLog(LogGeneralAccountingType.CREATE, event);
  }

  afterUpdate(event: UpdateEvent<GeneralAccounting>) {
    this.createLog(LogGeneralAccountingType.UPDATE, event);
  }

  afterSoftRemove(event: SoftRemoveEvent<GeneralAccounting>) {
    this.createLog(LogGeneralAccountingType.DELETE, event);
  }
}
