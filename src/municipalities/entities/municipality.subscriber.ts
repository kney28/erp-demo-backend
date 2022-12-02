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

import { Municipality } from './municipality.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Municipalitylogs } from './municipalitylogs.entity';

@EventSubscriber()
export class MunicipalitySubscriber
  implements EntitySubscriberInterface<Municipality>
{
  constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(Municipalitylogs)
    private municipalityLogsRepository: Repository<Municipalitylogs>,
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return Municipality;
  }

  createLog(
    type: number,
    event:
      | InsertEvent<Municipality>
      | UpdateEvent<Municipality>
      | SoftRemoveEvent<Municipality>,
  ) {
    const municipalitylog: DeepPartial<Municipalitylogs> = {
      value: JSON.stringify(event.entity),
      type: type,
      user: this.cls.get('user'),
    };
    const municipalityLogs: Municipalitylogs =
      this.municipalityLogsRepository.create(municipalitylog);
    this.municipalityLogsRepository.save(municipalityLogs);
  }

  afterInsert(event: InsertEvent<Municipality>) {
    this.createLog(1, event);
  }

  afterUpdate(event: UpdateEvent<Municipality>) {
    this.createLog(2, event);
  }

  afterSoftRemove(event: SoftRemoveEvent<Municipality>) {
    this.createLog(3, event);
  }
}
