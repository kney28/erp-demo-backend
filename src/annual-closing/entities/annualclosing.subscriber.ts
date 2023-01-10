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
import { AnnualClosing } from './annualclosing.entity';
import {
  AnnualClosingLogs,
  LogAnnualClosingType,
} from './annualclosinglogs.entity';

@EventSubscriber()
export class AnnualClosingSubscriber
  implements EntitySubscriberInterface<AnnualClosing>
{
  constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(AnnualClosingLogs)
    private annualclosinglogsRepository: Repository<AnnualClosingLogs>,
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return AnnualClosing;
  }

  createLog(
    type: LogAnnualClosingType,
    event:
      | InsertEvent<AnnualClosing>
      | UpdateEvent<AnnualClosing>
      | SoftRemoveEvent<AnnualClosing>,
  ) {
    const annualclosinglog: DeepPartial<AnnualClosingLogs> = {
      value: JSON.stringify(event.entity),
      type: type,
      user: this.cls.get('user'),
    };
    const annualclosinglogs: AnnualClosingLogs =
      this.annualclosinglogsRepository.create(annualclosinglog);
    this.annualclosinglogsRepository.save(annualclosinglogs);
  }

  afterInsert(event: InsertEvent<AnnualClosing>) {
    this.createLog(LogAnnualClosingType.CREATE, event);
  }

  afterUpdate(event: UpdateEvent<AnnualClosing>) {
    this.createLog(LogAnnualClosingType.UPDATE, event);
  }

  afterSoftRemove(event: SoftRemoveEvent<AnnualClosing>) {
    this.createLog(LogAnnualClosingType.DELETE, event);
  }
}
