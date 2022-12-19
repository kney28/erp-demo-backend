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
import { RetentionConcept } from './retention-concept.entity';
import { RetentionConceptLogs } from './retention-conceptlogs.entity';

@EventSubscriber()
export class RetentionConceptSubscriber
  implements EntitySubscriberInterface<RetentionConcept>
{
  constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(RetentionConceptLogs)
    private retentionConceptLogsRepository: Repository<RetentionConceptLogs>,
    @InjectRepository(RetentionConcept)
    private retentionConcept: Repository<RetentionConcept>,
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return RetentionConcept;
  }

  createLog(
    type: number,
    event:
      | InsertEvent<RetentionConcept>
      | UpdateEvent<RetentionConcept>
      | SoftRemoveEvent<RetentionConcept>,
  ) {
    const retentionConcept: DeepPartial<RetentionConceptLogs> = {
      value: JSON.stringify(event.entity),
      type: type,
      user: this.cls.get('user'),
    };
    const retentionConceptLogs: RetentionConceptLogs =
      this.retentionConceptLogsRepository.create(retentionConcept);
    this.retentionConceptLogsRepository.save(retentionConceptLogs);
  }

  afterInsert(event: InsertEvent<RetentionConcept>) {
    this.createLog(1, event);
  }

  afterUpdate(event: UpdateEvent<RetentionConcept>) {
    this.createLog(2, event);
  }

  afterSoftRemove(event: SoftRemoveEvent<RetentionConcept>) {
    this.createLog(3, event);
  }
}
