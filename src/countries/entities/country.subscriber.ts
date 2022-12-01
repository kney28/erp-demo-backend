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

import { LogCountryType } from './countrylogs.entity';
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
    type: LogCountryType,
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
    this.createLog(LogCountryType.CREATE, event);
  }

  afterUpdate(event: UpdateEvent<Country>) {
    this.createLog(LogCountryType.UPDATE, event);
  }

  afterSoftRemove(event: SoftRemoveEvent<Country>) {
    this.createLog(LogCountryType.DELETE, event);
  }
}
