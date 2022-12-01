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
import { LogTypesSeatType, TypesSeatlogs } from './types-seatslogs.entity';
import { TypesSeat } from './types-seat.entity';

@EventSubscriber()
export class TypesSeatSubscriber
  implements EntitySubscriberInterface<TypesSeat>
{
  constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(TypesSeatlogs)
    private typesSeatlogsRepository: Repository<TypesSeatlogs>,
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return TypesSeat;
  }

  createLog(
    type: LogTypesSeatType,
    event:
      | InsertEvent<TypesSeat>
      | UpdateEvent<TypesSeat>
      | SoftRemoveEvent<TypesSeat>,
  ) {
    const seatlog: DeepPartial<TypesSeatlogs> = {
      value: JSON.stringify(event.entity),
      type: type,
      user: this.cls.get('user'),
    };
    const typesSeatlogs: TypesSeatlogs =
      this.typesSeatlogsRepository.create(seatlog);
    this.typesSeatlogsRepository.save(typesSeatlogs);
  }

  afterInsert(event: InsertEvent<TypesSeat>) {
    this.createLog(LogTypesSeatType.CREATE, event);
  }

  afterUpdate(event: UpdateEvent<TypesSeat>) {
    this.createLog(LogTypesSeatType.UPDATE, event);
  }

  afterSoftRemove(event: SoftRemoveEvent<TypesSeat>) {
    this.createLog(LogTypesSeatType.DELETE, event);
  }
}
