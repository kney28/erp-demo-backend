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

import { Neighborhood } from './neighborhood.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Neighborhoodlogs } from './neighborhoodlogs.entity';

@EventSubscriber()
export class NeighborhoodSubscriber
  implements EntitySubscriberInterface<Neighborhood>
{
  constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(Neighborhoodlogs)
    private neighborhoodLogsRepository: Repository<Neighborhoodlogs>,
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return Neighborhood;
  }

  createLog(
    type: number,
    event:
      | InsertEvent<Neighborhood>
      | UpdateEvent<Neighborhood>
      | SoftRemoveEvent<Neighborhood>,
  ) {
    const neighborhoodLog: DeepPartial<Neighborhoodlogs> = {
      value: JSON.stringify(event.entity),
      type: type,
      user: this.cls.get('user'),
    };
    const neighborhoodLogs: Neighborhoodlogs =
      this.neighborhoodLogsRepository.create(neighborhoodLog);
    this.neighborhoodLogsRepository.save(neighborhoodLogs);
  }

  afterInsert(event: InsertEvent<Neighborhood>) {
    this.createLog(1, event);
  }

  afterUpdate(event: UpdateEvent<Neighborhood>) {
    this.createLog(2, event);
  }

  afterSoftRemove(event: SoftRemoveEvent<Neighborhood>) {
    this.createLog(3, event);
  }
}
