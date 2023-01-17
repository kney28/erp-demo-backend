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
import { Floor } from './floor.entity';
import { FloorLogs, logs } from './floor-logs.entity';

@EventSubscriber()
export class FloorSubscriber implements EntitySubscriberInterface<Floor> {
  constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(FloorLogs)
    private floorLogsRepository: Repository<FloorLogs>,
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return Floor;
  }

  createLog(
    type: logs,
    event: InsertEvent<Floor> | UpdateEvent<Floor> | SoftRemoveEvent<Floor>,
  ) {
    const floorLog: DeepPartial<FloorLogs> = {
      value: JSON.stringify(event.entity),
      type: type,
      user: this.cls.get('user'),
    };
    const floorLogs: FloorLogs = this.floorLogsRepository.create(floorLog);
    this.floorLogsRepository.save(floorLogs);
  }

  afterInsert(event: InsertEvent<Floor>) {
    this.createLog(logs.CREATE, event);
  }

  afterUpdate(event: UpdateEvent<Floor>) {
    this.createLog(logs.UPDATE, event);
  }

  afterSoftRemove(event: SoftRemoveEvent<Floor>) {
    this.createLog(logs.DELETE, event);
  }
}
