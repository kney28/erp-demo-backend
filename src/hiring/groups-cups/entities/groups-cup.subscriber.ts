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
import { GroupsCup } from './groups-cup.entity';
import { GroupsCupLogs } from './groups-cuplogs.entity';

@EventSubscriber()
export class GroupsCupSubscriber
  implements EntitySubscriberInterface<GroupsCup>
{
  constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(GroupsCupLogs)
    private groupsCupLogsRepository: Repository<GroupsCupLogs>,
    @InjectRepository(GroupsCup)
    private groupsCup: Repository<GroupsCup>,
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return GroupsCup;
  }

  createLog(
    type: number,
    event:
      | InsertEvent<GroupsCup>
      | UpdateEvent<GroupsCup>
      | SoftRemoveEvent<GroupsCup>,
  ) {
    const groupsCup: DeepPartial<GroupsCupLogs> = {
      value: JSON.stringify(event.entity),
      type: type,
      user: this.cls.get('user'),
    };
    const groupsCupLogs: GroupsCupLogs =
      this.groupsCupLogsRepository.create(groupsCup);
    this.groupsCupLogsRepository.save(groupsCupLogs);
  }

  afterInsert(event: InsertEvent<GroupsCup>) {
    this.createLog(1, event);
  }

  afterUpdate(event: UpdateEvent<GroupsCup>) {
    this.createLog(2, event);
  }

  afterSoftRemove(event: SoftRemoveEvent<GroupsCup>) {
    this.createLog(3, event);
  }
}
