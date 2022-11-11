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

import { Country } from './country.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Countrylogs } from './countrylogs.entity';

@EventSubscriber()
export class ContrySubscriber implements EntitySubscriberInterface<Country> {
  constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(Countrylogs)
    private countrylogsRepository: Repository<Countrylogs>,
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return Country;
  }

  createLog(
    type: number,
    event:
      | InsertEvent<Country>
      | UpdateEvent<Country>
      | SoftRemoveEvent<Country>,
  ) {
    const countrylog: DeepPartial<Countrylogs> = {
      value: JSON.stringify(event.entity),
      type: type,
      user: this.cls.get('user'),
    };
    const countrylogs: Countrylogs =
      this.countrylogsRepository.create(countrylog);
    this.countrylogsRepository.save(countrylogs);
  }

  afterInsert(event: InsertEvent<Country>) {
    this.createLog(1, event);
  }

  afterUpdate(event: UpdateEvent<Country>) {
    this.createLog(2, event);
  }

  afterSoftRemove(event: SoftRemoveEvent<Country>) {
    this.createLog(3, event);
  }
}
