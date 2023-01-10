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
import { RequirementsListDetail } from './requirements-lists-detail.entity';
import { RequirementsListDetailLogs } from './requirements-list-detaillogs.entity';

@EventSubscriber()
export class RequirementsListDetailSubscriber
  implements EntitySubscriberInterface<RequirementsListDetail>
{
  constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(RequirementsListDetailLogs)
    private requirementsListDetailLogsRepository: Repository<RequirementsListDetailLogs>,
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return RequirementsListDetail;
  }

  createLog(
    type: number,
    event:
      | InsertEvent<RequirementsListDetail>
      | UpdateEvent<RequirementsListDetail>
      | SoftRemoveEvent<RequirementsListDetail>,
  ) {
    const requirementsList: DeepPartial<RequirementsListDetailLogs> = {
      value: JSON.stringify(event.entity),
      type: type,
      user: this.cls.get('user'),
    };
    const requirementsListDetailLogs: RequirementsListDetailLogs =
      this.requirementsListDetailLogsRepository.create(requirementsList);
    this.requirementsListDetailLogsRepository.save(requirementsListDetailLogs);
  }

  afterInsert(event: InsertEvent<RequirementsListDetail>) {
    this.createLog(1, event);
  }

  afterUpdate(event: UpdateEvent<RequirementsListDetail>) {
    this.createLog(2, event);
  }

  afterSoftRemove(event: SoftRemoveEvent<RequirementsListDetail>) {
    this.createLog(3, event);
  }
}
