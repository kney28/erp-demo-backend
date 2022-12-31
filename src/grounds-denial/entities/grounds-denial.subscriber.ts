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
import { GroundsDenial } from './grounds-denial.entity';
import { GroundsDenialLogs } from './grounds-deniallogs.entity';

@EventSubscriber()
export class GroundsDenialSubscriber
  implements EntitySubscriberInterface<GroundsDenial>
{
  constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(GroundsDenialLogs)
    private groundsDenialLogsRepository: Repository<GroundsDenialLogs>,
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return GroundsDenial;
  }

  createLog(
    type: number,
    event:
      | InsertEvent<GroundsDenial>
      | UpdateEvent<GroundsDenial>
      | SoftRemoveEvent<GroundsDenial>,
  ) {
    const groundsDenial: DeepPartial<GroundsDenialLogs> = {
      value: JSON.stringify(event.entity),
      type: type,
      user: this.cls.get('user'),
    };
    const groundsDenialLogs: GroundsDenialLogs =
      this.groundsDenialLogsRepository.create(groundsDenial);
    this.groundsDenialLogsRepository.save(groundsDenialLogs);
  }

  afterInsert(event: InsertEvent<GroundsDenial>) {
    this.createLog(1, event);
  }

  afterUpdate(event: UpdateEvent<GroundsDenial>) {
    this.createLog(2, event);
  }

  afterSoftRemove(event: SoftRemoveEvent<GroundsDenial>) {
    this.createLog(3, event);
  }
}
