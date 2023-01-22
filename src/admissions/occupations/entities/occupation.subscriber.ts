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
import { Occupation } from './occupation.entity';
import { LogOccupationType, OccupationLogs } from './occupationlogs.entity';

@EventSubscriber()
export class OccupationSubscriber
  implements EntitySubscriberInterface<Occupation>
{
  constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(OccupationLogs)
    private occupationlogsRepository: Repository<OccupationLogs>,
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return Occupation;
  }

  createLog(
    type: LogOccupationType,
    event:
      | InsertEvent<Occupation>
      | UpdateEvent<Occupation>
      | SoftRemoveEvent<Occupation>,
  ) {
    const occupationlog: DeepPartial<OccupationLogs> = {
      value: JSON.stringify(event.entity),
      type: type,
      user: this.cls.get('user'),
    };
    const occupationlogs: OccupationLogs =
      this.occupationlogsRepository.create(occupationlog);
    this.occupationlogsRepository.save(occupationlogs);
  }

  afterInsert(event: InsertEvent<Occupation>) {
    this.createLog(LogOccupationType.CREATE, event);
  }

  afterUpdate(event: UpdateEvent<Occupation>) {
    this.createLog(LogOccupationType.UPDATE, event);
  }

  afterSoftRemove(event: SoftRemoveEvent<Occupation>) {
    this.createLog(LogOccupationType.DELETE, event);
  }
}
