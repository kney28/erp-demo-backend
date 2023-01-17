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
import { LocationLogs } from './location-logs.entity';
import { Location } from './location.entity';

@EventSubscriber()
export class LocationSubscriber implements EntitySubscriberInterface<Location> {
  constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(LocationLogs)
    private locationLogsRepository: Repository<LocationLogs>,
    @InjectRepository(Location)
    private location: Repository<Location>,
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return Location;
  }

  createLog(
    type: number,
    event:
      | InsertEvent<Location>
      | UpdateEvent<Location>
      | SoftRemoveEvent<Location>,
  ) {
    const locationLog: DeepPartial<LocationLogs> = {
      value: JSON.stringify(event.entity),
      type: type,
      user: this.cls.get('user'),
    };
    const locationLogs: LocationLogs =
      this.locationLogsRepository.create(locationLog);
    this.locationLogsRepository.save(locationLogs);
  }

  afterInsert(event: InsertEvent<Location>) {
    this.createLog(1, event);
  }

  afterUpdate(event: UpdateEvent<Location>) {
    this.createLog(2, event);
  }

  afterSoftRemove(event: SoftRemoveEvent<Location>) {
    this.createLog(3, event);
  }
}
