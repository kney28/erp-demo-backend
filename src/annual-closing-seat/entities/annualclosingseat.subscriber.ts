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
import { AnnualClosingSeat } from './annualclosingseat.entity';
import {
  AnnualClosingSeatLogs,
  LogAnnualClosingSeatType,
} from './annualclosingseatlogs.entity';

@EventSubscriber()
export class AnnualClosingSeatSubscriber
  implements EntitySubscriberInterface<AnnualClosingSeat>
{
  constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(AnnualClosingSeatLogs)
    private annualclosingseatlogsRepository: Repository<AnnualClosingSeatLogs>,
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return AnnualClosingSeat;
  }

  createLog(
    type: LogAnnualClosingSeatType,
    event:
      | InsertEvent<AnnualClosingSeat>
      | UpdateEvent<AnnualClosingSeat>
      | SoftRemoveEvent<AnnualClosingSeat>,
  ) {
    const annualclosingseatlog: DeepPartial<AnnualClosingSeatLogs> = {
      value: JSON.stringify(event.entity),
      type: type,
      user: this.cls.get('user'),
    };
    const annualclosingseatlogs: AnnualClosingSeatLogs =
      this.annualclosingseatlogsRepository.create(annualclosingseatlog);
    this.annualclosingseatlogsRepository.save(annualclosingseatlogs);
  }

  afterInsert(event: InsertEvent<AnnualClosingSeat>) {
    this.createLog(LogAnnualClosingSeatType.CREATE, event);
  }

  afterUpdate(event: UpdateEvent<AnnualClosingSeat>) {
    this.createLog(LogAnnualClosingSeatType.UPDATE, event);
  }

  afterSoftRemove(event: SoftRemoveEvent<AnnualClosingSeat>) {
    this.createLog(LogAnnualClosingSeatType.DELETE, event);
  }
}
