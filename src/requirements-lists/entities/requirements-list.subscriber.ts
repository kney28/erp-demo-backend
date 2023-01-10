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
import { RequirementsList } from './requirements-list.entity';
import { RequirementsListLogs } from './requirements-listlogs.entity';

@EventSubscriber()
export class RequirementsListSubscriber
  implements EntitySubscriberInterface<RequirementsList>
{
  constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(RequirementsListLogs)
    private requirementsListLogsRepository: Repository<RequirementsListLogs>,
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return RequirementsList;
  }

  createLog(
    type: number,
    event:
      | InsertEvent<RequirementsList>
      | UpdateEvent<RequirementsList>
      | SoftRemoveEvent<RequirementsList>,
  ) {
    const requirementsList: DeepPartial<RequirementsListLogs> = {
      value: JSON.stringify(event.entity),
      type: type,
      user: this.cls.get('user'),
    };
    const requirementsListLogs: RequirementsListLogs =
      this.requirementsListLogsRepository.create(requirementsList);
    this.requirementsListLogsRepository.save(requirementsListLogs);
  }

  afterInsert(event: InsertEvent<RequirementsList>) {
    this.createLog(1, event);
  }

  afterUpdate(event: UpdateEvent<RequirementsList>) {
    this.createLog(2, event);
  }

  afterSoftRemove(event: SoftRemoveEvent<RequirementsList>) {
    this.createLog(3, event);
  }
}
